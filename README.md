# live-dashboard-snapshot-on-trending-video-game-titles

## About Top Video Game Dashboard

`Video Game Dashboard` is a team-created Flask-Pymongo-MongoDB web dashboard that provides a live snapshot about the top 5 Steam video game titles. This dashboard reports on the following five metrics and sources:

    - Revenue (Statista)
    - Viewership / Subscribership (Twitch)
    - Playerbase (SteamCharts)
    - Search Relevance (Google Trends)
    - Correlation to parallel blockchain games (DappRadar)

Data generation done via web scrapping and direct import into a mongoDB database, and a Flask web server app will be calling and graphing the data when a user interacts with our dashboard. Our aim is to provide a general overview of the performance of trending video games and the video game industry as a whole. 

Along with the analysis, project also involved a written report and a Powerpoint presentation.

## How to Use
0) User clones this Github repo.
1) User requires local installation of:
    - MongoDB (optionally with mongosh or mongoCompass)
    - Python (and related libraries)
2) User runs `scrape_web.py` to scrape the relevant websites and clean its returned data.
3) User runs `seed_data_insert` to populate local mongoDB database.
4) User runs `app.py` to launch the Flask-generated webpage.

## Built with
- Python
    - Flask
    - Pymongo
    - Pandas
    - Beautiful Soup
    - Splinter
    - Request, Request-HTML
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
