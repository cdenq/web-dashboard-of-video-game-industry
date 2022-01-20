//---------------------------------------------------------
//INIT / MAIN FUNCTION THAT DOES THE FIRST POPULATE
//---------------------------------------------------------
function main() {
  // Set the default game title in dropdown
  //APEX
  document.querySelector("#selDataset").value = 'Apex';

  // Set the default charts
  console.log("hi");
  graphGoogleLine(googleLineData);
  graphGoogleGeo(googleGeoData);
  graphSteam(steamData);
  twitchbar();
  graphYahoo(yahooData);
  test();

  // gives dropdown menu interactivity
  document.querySelector("#selDataset").addEventListener("change", event => {
    restyleGoogleLine(event.target.value);
    restyleGoogleGeo(event.target.value);
    restyleSteam(event.target.value);
    restyleTwitch(event.target.value);
    restyleYahoo(event.target.value);
  });
};

function test() {
  console.log("function was gcalled")
};

//---------------------------------------------------------
//INITIALIZER
//---------------------------------------------------------
main();