from splinter import Browser
from bs4 import BeautifulSoup as bs
from requests_html import HTMLSession
from pprint import pprint

# browser setup
session = HTMLSession()

# visit site
url = 'https://dappradar.com/rankings'
r = session.get(url)

# render site
r.html.render(sleep = 1, keep_page = True)

# scrape site
# rankings = r.html.find('a')
# pprint(rankings)

soup = bs(r.html, 'html.parser')
print(soup)

# Quit the browser
# driver.quit()