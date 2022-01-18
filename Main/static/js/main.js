//---------------------------------------------------------
//INIT / MAIN FUNCTION THAT DOES THE FIRST POPULATE
//---------------------------------------------------------
function main() {
  //sets up all the interactivity / populates the options
  constructor();

  //graphs the default graphs
  graphGoogleLine();
  graphGoogleGeo();
  graphSteam();
  graphTwitch();
  graphYahoo();
};

//---------------------------------------------------------
//CONSTRUCTOR FUNCTION THAT SETS UP INTERACTIVITY
//---------------------------------------------------------
function constructor() {
  // gives dropdown menu interactivity
  document.querySelector("#selDataset").addEventListener("change", event => {
    restyleGoogleLine(event.target.value);
    restyleGoogleGeo(event.target.value);
    restyleSteam(event.target.value);
    restyleTwitch(event.target.value);
    restyleYahoo(event.target.value);
  });
};

//---------------------------------------------------------
//INITIALIZER
//---------------------------------------------------------
main();