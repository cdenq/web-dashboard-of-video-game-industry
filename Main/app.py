# dependencies
from flask import Flask, render_template

# setup Flask app
app = Flask(__name__)

# home route
@app.route('/')
def home():
    return render_template('index.html')

# dashboard route
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

if __name__ == "__main__":
    app.run(debug=True)