#------------------------
# DEPENDENCIES + SETUP
#------------------------

# dependencies
from flask import Flask, render_template
import pymongo as pym

# setup mongo connection
conn = 'mongodb://localhost:27017'
client = pym.MongoClient(conn)

# setup mongo variables
db = client.trending_games_db

# setup Flask app
app = Flask(__name__)

#------------------------
# DATA IMPORT
#------------------------
# create list of all the collection names
collection_names = db.list_collection_names()

# dump all collections' data into one mega list
# big_data = [list(db[i].find()) for i in collection_names]

# create individual variables for each collection
steam_data = list(db['steam_charts'].find())
twitch_data = list(db['twitch'].find())
gline_data = list(db['gtrends_multiline'].find())
ggeo_data =  list(db['gtrends_geo'].find())
yahoo_data = list(db['y_finance'].find())

#------------------------
# ROUTE CODE
#------------------------
# home route
@app.route('/')
def home():
    return render_template('static/html/index.html', \
        steamData = steam_data, \
        twitchData = twitch_data, \
        googleLineData = gline_data, \
        googleGeoData = ggeo_data, \
        yahooData = yahoo_data)

# dashboard route
@app.route('/dashboard')
def dashboard():
    return render_template('static/html/dashboard.html', \
        steamData = steam_data, \
        twitchData = twitch_data, \
        googleLineData = gline_data, \
        googleGeoData = ggeo_data, \
        yahooData = yahoo_data)

if __name__ == "__main__":
    app.run(debug=True)