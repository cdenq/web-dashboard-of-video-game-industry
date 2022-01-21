#------------------------
# DEPENDENCIES + SETUP
#------------------------
# dependencies
from flask import Flask, render_template, redirect
import pymongo as pym
from bson import json_util
import json
from flask import jsonify

# setup mongo connection
conn = 'mongodb://localhost:27017'
client = pym.MongoClient(conn)

# setup mongo variables
db = client.trending_games_db

# setup Flask app
app = Flask(__name__, template_folder='./static/html')

#------------------------
# ROUTE CODE
#------------------------
# home route
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/data')
def data():
    # create individual variables for each collection
    steam_data = list(db['steam_charts'].find())
    twitch_data = list(db['items'].find())
    gline_data = list(db['gtrends_multiline'].find())
    ggeo_data =  list(db['gtrends_geo'].find())
    yahoo_data = list(db['y_finance'].find())

    steamData = json.loads(json_util.dumps(steam_data))
    twitchData = json.loads(json_util.dumps(twitch_data))
    googleLineData = json.loads(json_util.dumps(gline_data))
    googleGeoData = json.loads(json_util.dumps(ggeo_data))
    yahooData = json.loads(json_util.dumps(yahoo_data))

    # return data
    return jsonify([steamData, twitchData, googleLineData, googleGeoData, yahooData])

# dashboard route
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

if __name__ == "__main__":
    app.run(debug=True)