//---------------------------------------------------------
//STEAM MULTILINE INIT
//---------------------------------------------------------
function graphSteam() {
};
var ultimateColors = [
  ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
  ['rgb(72,61,139)', 'rgb	(153,50,204)', 'rgb	(0,128,128)', 'rgb(199,21,133)', 'rgb(70,130,180)'],
  ['rgb(255,69,0)', 'rgb(139,0,139)', 'rgb(105,105,105)', 'rgb(0,128,128)', 'rgb(25,25,112)'],];

var HPdata = [{
    values: [406030282,354059895,141938423,98405225,73619062],
    labels: ['Counter Strike: Global Offensive', 'Dota 2', 'PUBG: Battlegrounds', 'Apex Legends', 'Grand Theft Auto V'],
    type: 'pie',
    title: 'Hours Played',
    marker: {
   colors: ultimateColors[0]}
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
    title: 'Peak Players',
    marker: {
   colors: ultimateColors[1]}
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
    title: 'Current Players',
    marker: {
   colors: ultimateColors[2]}
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