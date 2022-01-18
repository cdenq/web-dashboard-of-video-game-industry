# Python Program for
# demonstrating the 
# PyMongo Cursor to JSON
   
  
# Importing required modules
from pymongo import MongoClient
from bson.json_util import dumps, loads
  
  
# Connecting to MongoDB server
# client = MongoClient('host_name',
# 'port_number')
client = MongoClient('localhost', 27017)
  
# Connecting to the database named
# GFG
mydatabase = client.trending_games_db
   
# Accessing the collection named
# gfg_collection
mycollection = mydatabase.twitch
  
# Now creating a Cursor instance
# using find() function
cursor = mycollection.find()
  
# Converting cursor to the list 
# of dictionaries
list_cur = list(cursor)
  
# Converting to the JSON
json_data = dumps(list_cur, indent = 2) 
   
# Writing data to file data.json
with open('data.json', 'w') as file:
    file.write(json_data)