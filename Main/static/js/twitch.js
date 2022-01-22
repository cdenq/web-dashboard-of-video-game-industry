//---------------------------------------------------------
//TWITCH VIEWS
//---------------------------------------------------------
function graphTwitch(data, gameTitle) {
  
  //formatting vars
  let heightGraph = 300;
  let widthGraph = 700;
  let mL = 50;
  let mR = 50;
  let mT = 50;
  let mB = 50;
  let mPad = 1;

  var gameTitleList = ["apex", "csgo", "dota", "gta", "rust"];
  let realTitleList = ["Apex Legends", "Counter-Strike: Global Offensive", "Dota 2", "Grand Theft Auto V", "Rust"];
  //might need to code out the calculation to show how you got average (?)
  let average = 101420

  if (gameTitle == gameTitleList[0]) {
    realTitle = realTitleList[0];
  } else if (gameTitle == gameTitleList[1]) {
    realTitle = realTitleList[1];
  } else if (gameTitle = gameTitleList[2]) {
    realTitle = realTitleList[2];
  } else if (gameTitle = gameTitleList[3]) {
    realTitle = realTitleList[3];
  } else {
    realTitle = realTitleList[4];
  };
  
  //TESTER PRINTS
  //let objLength = Object.keys(data[0]).length;\
  // console.log(gameTitle);
  // console.log(gameTitleList[0]);
  // console.log(realTitle);
  // console.log(data[0][realTitle]);

  var barData = {
    y: [data[0][realTitle], average],
    x: [realTitle, 'Average Top 5'],
    type: "bar"
  };
  let traceData = [barData]

  var barLayout = {
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

  Plotly.newPlot("twitch", traceData, barLayout);
};

//---------------------------------------------------------
//GOOGLE MULTILINE RESTYLE VIA GAME TITLE
//---------------------------------------------------------
function restyleTwitch(value) {
  // Initialize an empty array for the country's data
  let newData = [];

  if (event.target.value == 'apex') {
        newData = data.map(item => item['Apex Legends']);
    } else if (event.target.value == 'csgo') {
        newData = data.map(item => item['Counter-Strike: Global Offensive']);
    } else if (event.target.value == 'dota') {
        newData = data.map(item => item['Dota 2']);
    } else if (event.target.value == 'gta') {
        newData = data.map(item => item['Grand Theft Auto V']);
    } else { //is rust
        newData = data.map(item => item['Rust']);
    };

  Plotly.restyle("twitch", "y", [newData]);
};


  //---------------------------------------------------------
// //GOOGLE MULTILINE RESTYLE VIA INDEX
// //---------------------------------------------------------
// function restyleTwitch(value) {
//   // Initialize an empty array for the country's data
//   let newData = [];

//   if (event.target.value == 'apex') {
//         newData = data.map(item => item[7][1]);
//     } else if (event.target.value == 'csgo') {
//         newData = data.map(item => item[18][1]);
//     } else if (event.target.value == 'dota') {
//         newData = data.map(item => item[27][1]);
//     } else if (event.target.value == 'gta') {
//         newData = data.map(item => item[43][1]);
//     } else { //is rust
//         newData = data.map(item => item[74][1]);
//     };

//   Plotly.restyle("twitch", "y", [newData]);
// };