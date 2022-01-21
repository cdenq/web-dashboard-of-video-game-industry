//---------------------------------------------------------
//STEAM MULTILINE INIT
//---------------------------------------------------------
function graphSteam() {
};
var HPdata = [{
    values: [406030282,354059895,141938423,98405225,73619062],
    labels: ['Counter Strike: Global Offensive', 'Dota 2', 'PUBG: Battlegrounds', 'Apex Legends', 'Grand Theft Auto V'],
    type: 'pie',
    title: 'Hours Played'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  // Plotly.newPlot('steam1', HPdata, layout);

  var PPdata = [{
    values: [906996,760295,696704,251595,163339],
    labels: ['Counter Strike: Global Offensive', 'Dota 2', 'PUBG: Battlegrounds', 'Apex Legends', 'Grand Theft Auto V'],
    type: 'pie',
    title: 'Peak Players'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  // Plotly.newPlot('steam2', PPdata, layout);

  var CPdata = [{
    values: [809631,661120,565534,240196,123172],
    labels: ['Counter Strike: Global Offensive', 'Dota 2', 'PUBG: Battlegrounds', 'Apex Legends', 'Grand Theft Auto V'],
    type: 'pie',
    title: 'Current Players'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  // Plotly.newPlot('steam3', CPdata, layout);

//---------------------------------------------------------
//STEAM MULTILINE RESTYLE
//---------------------------------------------------------
function restyleSteam() {
};