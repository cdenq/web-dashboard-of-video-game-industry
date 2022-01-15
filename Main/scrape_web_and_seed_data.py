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

#------------------------------
#- BROSWER SETUP
#------------------------------
# Sets a path to Google Chrome
executable_path = {'executable_path': ChromeDriverManager().install()}
browser = Browser('chrome', **executable_path, headless=False)

#------------------------------
#- TWITCH SCRAPE
#------------------------------
# URL of the page to be scraped
url = 'https://twitchtracker.com/statistics/games'
# Visit the URL
browser.visit(url)
# Parse the link using BeautifulSoup
html = browser.html
soup = bs(html, 'html.parser')

# Find the games and their respective views from page 1 of the table
games1 = []
views1 = []

table1 = soup.find('table', id='share-table')

for i in table1.find_all('a'):
    output = i.text
    games1.append(output)

for i in table1.find_all('td', class_="sorting_1"):
    output = i.text
    views1.append(output)

    # # Navigate to page two
# page_two = browser.links.find_by_partial_text('2')[1].click()

# Find the games and their respective views from page 1 of the table

# games2 = []
# views2 = []

#table2 = soup.find('table', id='share-table')

# for i in table2.find_all('a'):
#     output = i.text
#     games2.append(output)
    
# for i in table1.find_all('td', class_="sorting_1"):
#     output = i.text
#     views2.append(output)

# Remove "All Other Games Combined" from views1
del views1[0]

# Remove leading and trailing spaces
views1cleaned = []

for i in views1:
    j = i.replace(' ','')
    views1cleaned.append(j)

    # Upload to DataFrame and remove extra characters
df3 = pd.DataFrame(games1, columns = ['GAMES'])
df3['VIEWS'] = views1cleaned
df3 = df3.replace(r'\n+|\t+','', regex=True)

# Convert DataFrame into Dictionary
twitch = pd.Series(df3.VIEWS.values,index=df3.GAMES).to_dict()

# connecting to mongodb
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# declare the database
db = client.trending_games_db
collection = db.twitch

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

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)
db = client['trending_games_db']
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
search_apex = pd.read_csv('Resources/multiTimeline(Apex).csv')
search_csgo = pd.read_csv('Resources/multiTimeline(CSGO).csv')
search_dota = pd.read_csv('Resources/multiTimeline(DOTA).csv')
search_rust = pd.read_csv('Resources/multiTimeline(Rust).csv')
search_gta = pd.read_csv('Resources/multiTimeline(GTAV).csv')

#geomap information
geo_apex = pd.read_csv('Resources/geoMap(Apex).csv')
geo_csgo = pd.read_csv('Resources/geoMap(CSGO).csv')
geo_dota = pd.read_csv('Resources/geoMap(DOTA).csv')
geo_rust = pd.read_csv('Resources/geoMap(Rust).csv')
geo_gta = pd.read_csv('Resources/geoMap(GTAV).csv')

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
geo_ls = [geo_apex, geo_csgo, geo_dota, geo_gta, geo_rust]
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

# connecting to mongodb
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# declare the database
db = client.trending_games_db

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

print("YFinance scrape done!")

#------------------------------
#- DAPPRADAR SCRAPE
#------------------------------

browser.quit()