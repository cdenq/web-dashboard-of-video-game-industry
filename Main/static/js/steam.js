//---------------------------------------------------------
//STEAM MULTILINE INIT
//---------------------------------------------------------
function graphSteam(results, title) {
  let heightGraph = 200;
  let widthGraph = 400;
  let mL = 0;
  let mR = 0;
  let mT = 20;
  let mB = 20;
  let mPad = 1;

  var ultimateColors = [
    ['rgb(56, 75, 126)', 'rgb	(153,50,204)', 'rgb	(0,128,128)', 'rgb(105,105,105)', 'rgb(255,69,0)']
  ];
  // ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
  // ['rgb(72,61,139)', 'rgb	(153,50,204)', 'rgb	(0,128,128)', 'rgb(199,21,133)', 'rgb(70,130,180)'],
  // ['rgb(255,69,0)', 'rgb(139,0,139)', 'rgb(105,105,105)', 'rgb(0,128,128)', 'rgb(25,25,112)']

  var HPdata = [{
    values: [406030282,354059895,141938423,98405225,73619062],
    labels: ['CSGO', 'DOTA2', 'Rust', 'Apex', 'GTAV'],
    type: 'pie',
    title: 'Hours Played',
    marker: {colors: ultimateColors[0]}
  }];
    
  var layout = {
    height: heightGraph,
    width: widthGraph,
    margin: {
      l: mL,
      r: mR,
      b: mB,
      t: mT,
      pad: mPad
    }
  };

  var PPdata = [{
    values: [906996,760295,696704,251595,163339],
    labels: ['CSGO', 'DOTA2', 'Rust', 'Apex', 'GTAV'],
    type: 'pie',
    title: 'Peak Players',
    marker: {colors: ultimateColors[0]}
  }];
    
  var layout = {
    height: heightGraph,
    width: widthGraph,
    margin: {
      l: mL,
      r: mR,
      b: mB,
      t: mT,
      pad: mPad
    }
  };

  var CPdata = [{
    values: [809631,661120,565534,240196,123172],
    labels: ['CSGO', 'DOTA2', 'Rust', 'Apex', 'GTAV'],
    type: 'pie',
    title: 'Current Players',
    marker: {colors: ultimateColors[0]}
  }];
  
  var layout = {
    height: heightGraph,
    width: widthGraph,
    margin: {
      l: mL,
      r: mR,
      b: mB,
      t: mT,
      pad: mPad
    }
  };

  Plotly.newPlot('steam1', HPdata, layout);    
  Plotly.newPlot('steam2', PPdata, layout);
  Plotly.newPlot('steam3', CPdata, layout);
};

//---------------------------------------------------------
//STEAM MULTILINE RESTYLE
//---------------------------------------------------------
function restyleSteam() {
};