//---------------------------------------------------------
//INIT / MAIN FUNCTION THAT DOES THE FIRST POPULATE
//---------------------------------------------------------
async function main() {
  // Scrape our "api" return page
  let url = '/data';
  let response = await fetch(url);
  data = await response.json();

  // set variables
  let steamData = data[0];
  let twitchData = data[1];
  let googleLineData = data[2];
  let googleGeoData = data[3];
  let yahooData = data[4];
  
  let defaultValue = 'apex'
  // Set the default game title in dropdown, APEX
  document.querySelector("#selDataset").value = defaultValue;

  // -------------------------------------
  // WIP
  // -------------------------------------
  // Use the sample names in the data to populate the select box with options
  // data.names.forEach(sample => {
  //   const option = document.createElement("option");
  //   option.textContent = sample;
  //   document.querySelector("#selDataset").append(option);
  // });

  // Set the default charts
  graphGoogleLine(googleLineData, defaultValue);
  // graphGoogleGeo(googleGeoData, defaultValue);
  graphSteam(steamData, defaultValue);
  graphTwitch(twitchData, defaultValue);
  graphYahoo(yahooData);

  // document.querySelector("#selDataset").addEventListener("change", event => {
  //   restyleGoogleLine(event.target.value);
  //   restyleGoogleGeo(event.target.value);
  //   restyleSteam(event.target.value);
  //   restyleTwitch(event.target.value);
  // });
};

//---------------------------------------------------------
//INITIALIZER
//---------------------------------------------------------
let data = {};
main();