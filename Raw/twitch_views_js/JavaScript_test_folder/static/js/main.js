//---------------------------------------------------------
//INIT / MAIN FUNCTION THAT DOES THE FIRST POPULATE
//---------------------------------------------------------
async function main() {
  // Scrape our "api" return page
  let url = '/data';
  data = (await fetch(url)).json();
  //NOTE: from data...
  //[1] = steam
  //[2] = twitch
  //[3] = gline
  //[4] = ggeo
  //[5] = yahoo
  let steamData = data[1];
  let twitchData = data[2];
  let googleLineData = data[3];
  let googleGeoData = data[4];
  let yahooData = data[5];
  console.log(googleLineData);

  // Set the default game title in dropdown, APEX
  document.querySelector("#selDataset").value = 'apex';

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
  graphGoogleLine(googleLineData, 'Apex');
  // graphGoogleGeo(googleGeoData, 'Apex');
  // -------------------------------------
  // WIP
  // -------------------------------------
  // Adjust functions to reference database
  graphSteam();
  // twitchbar();
  // graphYahoo();

  // -------------------------------------
  // WIP
  // -------------------------------------
  // gives dropdown menu interactivity
  // document.querySelector("#selDataset").addEventListener("change", event => {
    // restyleGoogleLine(event.target.value);
    // restyleGoogleGeo(event.target.value);
    // restyleSteam(event.target.value);
    // restyleTwitch(event.target.value);
    // restyleYahoo(event.target.value);
  // });
};

//---------------------------------------------------------
//INITIALIZER
//---------------------------------------------------------
let data = {};
main();