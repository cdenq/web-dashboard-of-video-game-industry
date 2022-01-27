# live-dashboard-snapshot-on-trending-video-game-titles

## About Top Video Game Dashboard

`Video Game Dashboard` is a team-created Flask-Pymongo-MongoDB web dashboard that provides various snapshots about the top 5 Steam video game titles. This dashboard reports on the following four metrics and sources:

    - Surrounding stock performance (Y!Finance)
    - Viewership (Twitch)
    - Playerbase (SteamCharts)
    - Search Relevance (Google Trends)

Data generation done via web scrapping and direct import into a mongoDB database, and a Flask web server app calls and graphs the data using Plotly/Leaflet. Our aim is to provide a limited overview of the performance of trending video games and the video game industry as a whole. 

Along with the analysis, project also involved a written report and a Powerpoint presentation.

## How to Use
0) User clones this Github repo.
1) User requires local installation of:
    - MongoDB (optionally with mongosh or mongoCompass)
    - Python (and related libraries)
2) User runs `scrape_web_and_seed_data.py` to scrape the relevant websites and clean its returned data.
3) User runs `app.py` to launch the Flask-generated webpage.
4) User can visit /data to get the raw .json data.
5) Otherwise, user can visit /dashboard to view the graphs.

## Built with
- Python
    - Flask
    - Pymongo
    - Pandas
    - Beautiful Soup
    - Splinter
    - Request
    - yFinance
- HTML, CSS, JavaScript
    - Plotly
    - Leaflet
- NoSQL: mongoDB
    - mongosh (mongo shell)
    - mongoCompass
- GitHub
    - Github Pages
- Google
    - Google Docs
    - Google Slides

## Technical Skills
- Python web scraping
- Cleaning, sorting, filtering
- Summary statistics, aggregating
- Loading data into mongoDB
- Querying in Python Flask
- Rendering and dynamically creating webpage

## Qualitative Skills
- Synthesizing results for tentative conclusions
- Acknowledging potential pitfalls with results and techniques

## Screenshots
![ezgif com-gif-maker](https://user-images.githubusercontent.com/74934154/151427757-7e09cdda-9ffc-45ae-b6df-9ab5da0e0703.gif)
![Image 3](https://user-images.githubusercontent.com/74934154/150647896-f403e095-967f-4bd9-a479-e7d417924062.png)
![image1](https://github.com/cdenq/web-dashboard-of-video-game-industry/blob/main/Screenshots/image1.png?raw=true)
![Image2](https://user-images.githubusercontent.com/74934154/150647895-f8840f00-ae60-4bf6-b66a-5d72a0123520.png)
![Image4](https://user-images.githubusercontent.com/74934154/150647897-493dba42-c09f-4085-aef7-c318f7117542.png)
![Image 5](https://user-images.githubusercontent.com/74934154/150648828-df0c065e-f394-455b-871d-acee91587e3e.png)
