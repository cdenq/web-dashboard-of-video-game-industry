//---------------------------------------------------------
//INIT / MAIN FUNCTION THAT DOES THE FIRST POPULATE
//---------------------------------------------------------
function main() {
  // Set the default game title in dropdown
  //APEX
  document.querySelector("#selDataset").value = 'Apex Legends';

  // Set the default charts
  testerFunction(testMe);
  graphGoogleLine(googleLineData);
  graphGoogleGeo(googleGeoData);
  graphSteam(steamData);
  twitchbar();
  graphYahoo(yahooData);
  madeIt();

  // gives dropdown menu interactivity
  document.querySelector("#selDataset").addEventListener("change", event => {
    // restyleGoogleLine(event.target.value);
    // restyleGoogleGeo(event.target.value);
    // restyleSteam(event.target.value);
    // restyleTwitch(event.target.value);
    // restyleYahoo(event.target.value);
  });
};

function madeIt() {
  console.log("function was reached past all the graphs")
};

//---------------------------------------------------------
//INITIALIZER
//---------------------------------------------------------
main();