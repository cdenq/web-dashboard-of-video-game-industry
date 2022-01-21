#------------------------------
#- DEPENDENCIES
#------------------------------
#Import Dependencies
import requests
from splinter import Browser
from bs4 import BeautifulSoup as bs
from webdriver_manager.chrome import ChromeDriverManager
import pymongo
import json
import pandas as pd
import numpy as np
from pprint import pprint
import matplotlib.pyplot as plt
from time import sleep
from random import randint
#yfinance - open-source API pip 
import yfinance as yf

#------------------------------
#- BROSWER + PYMONGO SETUP
#------------------------------
# Sets a path to Google Chrome
executable_path = {'executable_path': ChromeDriverManager().install()}
browser = Browser('chrome', **executable_path, headless=False)

# connecting to mongodb
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# declare the database
db = client.trending_games_db

# drop potential duplicate database
# pymongo.MongoClient.drop_database('trending_games_db')

#------------------------------
#- TWITCH SCRAPE
#------------------------------
URL = ['https://twitchtracker.com/games', 'https://twitchtracker.com/games?page=2', 'https://twitchtracker.com/games?page=3', 'https://twitchtracker.com/games?page=4', 'https://twitchtracker.com/games?page=5']
tags = []
games = []
cleanedviews = []
views = []

for url in range(0,5):      
    browser.visit(URL[url])
    html = browser.html
    soup = bs(html, 'html.parser')
    
    href_tags = soup.find_all(href=True)
    raw_games = href_tags[40:60]
    
    for x in raw_games:
        tags.append(str(x))
    
    for element in tags:
        if element not in games:
            front = element.split(">")[1]
            back = front.split("<")[0]
            games.append(back)
        
    viewhtml = soup.find_all('div', class_="ri-value")
    
    for x in viewhtml:
        cleanedviews.append(str(x))
    

    for element in cleanedviews:
        if element not in views:
            front = element.split(">")[2]
            back = front.split("<")[0]
            views.append(back)
    
    sleep(randint(5,10))
    

# Upload to DataFrame 
df = pd.DataFrame(games, columns = ['GAME'])
df['VIEWS'] = views

# Change VIEWS column to integers
df.VIEWS = (df.VIEWS.replace(r'[KM]+$', '', regex=True).astype(float) * df.VIEWS.str.extract(r'[\d\.]+([KM]+)', expand=False)
             .fillna(1)
             .replace(['K','M'], [10**3, 10**6]).astype(int))

avg_views = df['VIEWS'].mean()
median_views = df['VIEWS'].median()

df.drop(df.tail(1).index,inplace=True)

# Convert DataFrame into Dictionary
twitch = df.to_dict("records")

# connecting to mongodb
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# declare the database
collection = db.items2

# Push into MongoDB
collection.insert_one(twitch)

print("Twitch scrape done!")

#------------------------------
#- STEAM CHARTS SCRAPE
#------------------------------
url = "https://steamcharts.com/"
browser.visit(url)

html = browser.html
soup = bs(html,'html.parser')

top5_table = soup.find('table', id="top-games")
rows = top5_table.findAll('tr')

result_list = []
for tr in rows:
    td = tr.find_all('td')
    row = [i.text for i in td]
    result_list.append(row)

topgames_df = pd.DataFrame(result_list, columns=['Rank','Name', 'Current Players', 'Last 30 Days', 'Peak Players', 'Hours Played'])

topgames_df = topgames_df.replace(r'\n+|\t+',' ', regex=True) 

topgames_df.drop(['Rank', 'Last 30 Days'], axis=1, inplace=True)

top5 = topgames_df.drop([0, 6, 7,8,9,10])

collection = db['steam_charts']

topgames_df.reset_index(inplace=True)
data_dict = topgames_df.to_dict("records")

collection.insert_many(data_dict)

# print(client.list_database_names())

print("Steam charts scrape done!")

#------------------------------
#- GOOGLE TRENDS SCRAPE
#------------------------------

#timeline information
search_apex = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/multiTimeline(Apex).csv')
search_csgo = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/multiTimeline(CSGO).csv')
search_dota = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/multiTimeline(DOTA).csv')
search_rust = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/multiTimeline(Rust).csv')
search_gta = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/multiTimeline(GTAV).csv')

#geomap information
geo_apex = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/geoMap(Apex).csv')
geo_csgo = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/geoMap(CSGO).csv')
geo_dota = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/geoMap(DOTA).csv')
geo_rust = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/geoMap(Rust).csv')
geo_gta = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/geoMap(GTAV).csv')

#state information
geo_state = pd.read_csv('../Raw/GoogleTrends - Chris/Resources/statelatlong.csv')
geo_state.rename(columns = {'City' : 'Region'}, inplace = True)

#format, clean df multiline
search_ls = [search_apex, search_csgo, search_dota, search_gta, search_rust]
merged_search = search_ls[0].merge(search_ls[1], on = 'Month', how = 'outer')
for i in range(2, len(search_ls)):
    merged_search = merged_search.merge(search_ls[i], on = 'Month', how = 'outer')
merged_search.rename(columns = {merged_search.columns[1] : 'Apex',
                                merged_search.columns[2] : 'CSGO',
                                merged_search.columns[3] : 'Dota 2',
                                merged_search.columns[4] : 'GTA V',
                                merged_search.columns[5] : 'Rust'
}, inplace = True)
merged_search.replace('<1', 1, inplace = True)
merged_search = merged_search.astype({'Apex' : 'int64', 'Dota 2': 'int64'})
search_dict = merged_search.to_dict('records')

#format, clean df geo
geo_ls = [geo_apex, geo_csgo, geo_dota, geo_gta, geo_rust, geo_state]
merged_geo = geo_ls[0].merge(geo_ls[1], on = 'Region', how = 'outer')
for i in range(2, len(geo_ls)):
    merged_geo = merged_geo.merge(geo_ls[i], on = 'Region', how = 'outer')
merged_geo.rename(columns = {merged_geo.columns[1] : 'Apex',
                             merged_geo.columns[2] : 'CSGO',
                             merged_geo.columns[3] : 'Dota 2',
                             merged_geo.columns[4] : 'GTA V',
                             merged_geo.columns[5] : 'Rust'
}, inplace = True)
merged_geo.sort_values('Region', inplace = True)
merged_geo.reset_index(drop = True, inplace = True)
geo_dict = merged_geo.to_dict('records')

# declare the collection
g_line = db.gtrends_multiline
g_geo = db.gtrends_geo

# insert data
g_line.insert_many(search_dict)
g_geo.insert_many(geo_dict)

print("GTrends scrape done!")

#------------------------------
#- Y!FINANCE SCRAPE
#------------------------------
# Set start/end date
start_date = '2016-01-01'
end_date = '2022-01-15'

# Define ticker list
#NTDOY= Nintendo
#SONY= SONY
#MSFT= Microsoft
#ATVI= Activision Blizzard
#ZNGA= Zynga
#EA= Electronic Arts
tickers_list = ['NTDOY', 'SONY', 'MSFT', 'ATVI', 'EA']

# Create placeholder for data
data = pd.DataFrame(columns=tickers_list)

# Fetch data
for ticker in tickers_list:
    data[ticker] = yf.download(ticker, 
                               start_date,
                               end_date)['Adj Close']

gamingstockdata = data.to_dict('records')

collection = db.y_finance

# add to mongo
collection.insert_many(gamingstockdata)

print("YFinance scrape done!")

#------------------------------
#- QUIT BROWSER
#------------------------------
browser.quit()