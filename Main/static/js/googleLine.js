//---------------------------------------------------------
//GOOGLE MULTILINE INIT
//---------------------------------------------------------
function graphGoogleLine(data, title) {
    let googleLineTitle = `${title}'s Search Relevancy Over Time`;

    let gMonths = data.map(item => item.Month);
    let gMonthsValues = data.map(item => item.Apex);

    let trace1 = {
        x: gMonths,
        y: gMonthsValues,
        text: gMonths,
        type:'line'
    };
    let googleLineTraceData = [trace1];

    let googleLineLayout = {
        title: googleLineTitle
    };

    Plotly.newPlot('gline', googleLineTraceData, googleLineLayout);
};

//---------------------------------------------------------
//GOOGLE MULTILINE RESTYLE
//---------------------------------------------------------
function restyleGoogleLine(valueChange) {
  // Initialize an empty array for the country's data
  let data = [];

  if (event.target.value == '') {
      data = us;
  }
  else if (event.target.value == 'uk') {
      data = uk;
  }
  else if (event.target.value == 'canada') {
      data = canada;
  }

  Plotly.restyle("pie", "values", [data]);
};