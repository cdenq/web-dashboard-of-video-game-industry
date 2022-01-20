#------------------------
# DEPENDENCIES + SETUP
#------------------------
# dependencies
from flask import Flask, render_template
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
    # steam_data = [doc for doc in db['steam_charts'].find()]
    # twitch_data = db['items'].find()
    # gline_data = db['gtrends_multiline'].find()
    # ggeo_data =  db['gtrends_geo'].find()
    # yahoo_data = db['y_finance'].find()

    # steam_data = json.dumps(steam_data, default=json_util.default)
    steam_data = json.dumps(list(db['steam_charts'].find()), indent = 2)
    twitch_data = json.dumps(list(db['items'].find()), indent = 2)
    gline_data = json.dumps(list(db['gtrends_multiline'].find()), indent = 2)
    ggeo_data = json.dumps(list(db['gtrends_geo'].find()), indent = 2)
    yahoo_data = json.dumps(list(db['y_finance'].find()), indent = 2)

    # return data
    return [steam_data, twitch_data, gline_data, ggeo_data, yahoo_data]
    

# dashboard route
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

if __name__ == "__main__":
    app.run(debug=True)