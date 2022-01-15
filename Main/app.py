# dependencies
from flask import Flask, render_template
import pymongo as pym

# setup mongo connection
conn = 'mongodb://localhost:27017'
client = pym.MongoClient(conn)

# setup mongo variables
db = client.___

# setup Flask app
app = Flask(__name__)

# home route
@app.route('/')
def home():
    return render_template('index.html', var=var)

# dashboard route
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html', var=var)

if __name__ == "__main__":
    app.run(debug=True)