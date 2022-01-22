//---------------------------------------------------------
//GOOGLE MULTILINE INIT
//---------------------------------------------------------
function graphGoogleLine(data, title) {
    let googleLineTitle = `${cap(title)}'s Search Relevancy Over Time`;

    let gMonths = data.map(item => item['Month']);
    let gMonthsValues = data.map(item => item[title]);

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