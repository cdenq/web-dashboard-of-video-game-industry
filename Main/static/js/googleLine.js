//---------------------------------------------------------
//GOOGLE MULTILINE INIT
//---------------------------------------------------------
function graphGoogleLine(data, gameTitle) {
    let googleLineTitle = `${cap(gameTitle)}'s Search Relevancy Over Time`;

    var gameTitleList = ["apex", "csgo", "dota", "gta", "rust"];
    let realTitleList = ["Apex", "CSGO", "Dota 2", "GTA V", "Rust"];
  
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

    // TESTER PRINTS
    // console.log(gameTitle);
    // console.log(gameTitleList[0]);
    // console.log(realTitle);
    // console.log(data[0][realTitle]);

    let gMonths = data.map(item => item['Month']);
    let gMonthsValues = data.map(item => item[realTitle]);

    // console.log();
    console.log(data);
    console.log(gMonths);
    console.log(gMonthsValues);

    let trace1 = {
        x: gMonths,
        y: gMonthsValues,
        text: gMonths,
        type:'line'
    };
    let googleLineTraceData = [trace1];

    let googleLineLayout = {
        title: googleLineTitle,
        gridcolor: '#bdbdbd',
        gridwidth: 2,
        xaxis: {
          title: 'Month-Day by Year',
          titlefont: {
            family: 'Arial, sans-serif',
            size: 18,
            color: 'black'
          },
          showticklabels: true,
          tickangle: 'auto',
          tickfont: {
            family: 'Old Standard TT, serif',
            size: 14,
            color: 'lightgrey'
          },
          exponentformat: 'e',
          showexponent: 'all'
        },
        yaxis: {
          title: 'Search Popularity Index',
          titlefont: {
            family: 'Arial, sans-serif',
            size: 18,
            color: 'black'
          },
          showticklabels: true,
          tickangle: 0,
          tickfont: {
            family: 'Old Standard TT, serif',
            size: 14,
            color: 'lightgrey'
          },
          exponentformat: 'e',
          showexponent: 'all'
        }
    };

    Plotly.newPlot('gline', googleLineTraceData, googleLineLayout);
};

//---------------------------------------------------------
//GOOGLE MULTILINE RESTYLE
//---------------------------------------------------------
function restyleGoogleLine(value) {
  // Initialize an empty array for the country's data
  let newData = [];

  if (event.target.value == 'apex') {
        newData = data.map(item => item['Apex']);
    } else if (event.target.value == 'csgo') {
        newData = data.map(item => item['CSGO']);
    } else if (event.target.value == 'dota') {
        newData = data.map(item => item['Dota 2']);
    } else if (event.target.value == 'gta') {
        newData = data.map(item => item['GTA V']);
    } else { //is rust
        newData = data.map(item => item['Rust']);
    };

  Plotly.restyle("gline", "y", [newData]);
};