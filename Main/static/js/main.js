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

  // Populate the DropDown Menu values
  // Variables
  let dropdownTitles = ["Apex Legends", "Counter-Strike: Global Offensive", "Dota 2", "Grand Theft Auto V", "Rust"];
  let dropdownValues = ["apex", "csgo", "dota", "gta", "rust"];
  const panel = document.querySelector("#selDataset");
  // Clear any existing metadata
  panel.innerHTML = "";
  // Populate
  for (let i = 0; i < dropdownTitles.length; i++) {
    const option = document.createElement("option");
    option.textContent = dropdownTitles[i];
    option.value = dropdownValues[i];
    panel.append(option);
  };

  // Set the default charts
  graphGoogleLine(googleLineData, defaultValue);
  graphGoogleGeo(googleGeoData, defaultValue);
  graphSteam(steamData, defaultValue);
  graphTwitch(twitchData, defaultValue);
  graphYahoo(yahooData);

  // Change up charts based on click
  document.querySelector("#selDataset").addEventListener("change", event => {
    restyleGoogleLine(googleLineData, event.target.value);
    // restyleGoogleGeo(googleGeoData, event.target.value);
    restyleSteam(steamData, event.target.value);
    restyleTwitch(twitchData, event.target.value);
  });
};

//---------------------------------------------------------
//INITIALIZER
//---------------------------------------------------------
let data = {};
main();