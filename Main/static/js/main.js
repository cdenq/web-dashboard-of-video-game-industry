//---------------------------------------------------------
//GLOBAL VARIABLES
//---------------------------------------------------------
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

//---------------------------------------------------------
//LOADER FUNCTION THAT LOADS DATABASE FROM MONGO
//---------------------------------------------------------
// fetch call using async function
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("mydb");
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

    // print out all mongo collections
    db.list_collection_names();

    Stream()
    googleLine()
    
  });

//---------------------------------------------------------
//FILTER FUNCTION THAT LOADS SPECIFIC COLLECTION FROM MONGO
//---------------------------------------------------------
function loadColl(collectionIndex) {
    //function loadMongo();
    
    let collectionNames = Array.from(db.list_collection_names());
    return db.collectionNames[collectionIndex];
};

//---------------------------------------------------------
//INIT / MAIN FUNCTION THAT DOES THE FIRST POPULATE
//---------------------------------------------------------
function main() {

};

//---------------------------------------------------------
//CONSTRUCTOR FUNCTION THAT SETS UP INTERACTIVITY
//---------------------------------------------------------
function constructor() {
  // On change to the DOM
  document.querySelector("#selDataset").addEventListener("change", event => {
    
    // Initialize an empty array for the country's data
  let data = [];


  if (event.target.value == 'us') {
      data = us;
  }
  else if (event.target.value == 'uk') {
      data = uk;
  }
  else if (event.target.value == 'canada') {
      data = canada;
  }

  Plotly.restyle("pie", "values", [data]);
};