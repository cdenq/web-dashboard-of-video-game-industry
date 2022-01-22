//---------------------------------------------------------
//YAHOO MULTILINE INIT
//---------------------------------------------------------
function graphYahoo(data) {
  // title
  let yahooTitle = `Gaming Stock Data Over the Past 5 Years`;

  // testing functions
  // console.log(data);
  // console.log(data.length);

  // the specific gaming stocks we want to look at
  let stockNames = ['NTDOY', 'SONY', 'MSFT', 'ATVI', 'EA'];
  let yahooLineTraceData = [];
  
  for (let i = 0; i < stockNames.length; i++) {
    let yMonths = data.map(item => item[stockNames[i]]);
    let currentTrace = {
      x: `Timestep ${i}`,
      y: yMonths,
      name: stockNames[i],
      text: stockNames[i],
      type: 'line'
    };
    yahooLineTraceData.push(currentTrace);
  };

  let yahooLineLayout = {
      title: yahooTitle,
      gridcolor: '#bdbdbd',
      gridwidth: 2,
      xaxis: {
        title: 'Timestep',
        titlefont: {
          family: 'Arial, sans-serif',
          size: 20,
          color: 'black'
        },
        showticklabels: true,
        tickangle: 'auto',
        tickfont: {
          family: 'Old Standard TT, serif',
          size: 16,
          color: 'lightgrey'
        },
        exponentformat: 'e',
        showexponent: 'all'
      },
      yaxis: {
        title: 'Stock Price',
        titlefont: {
          family: 'Arial, sans-serif',
          size: 20,
          color: 'black'
        },
        showticklabels: true,
        tickangle: 0,
        tickfont: {
          family: 'Old Standard TT, serif',
          size: 16,
          color: 'lightgrey'
        },
        exponentformat: 'e',
        showexponent: 'all'
      }
  };

  Plotly.newPlot('yahoo', yahooLineTraceData, yahooLineLayout);
};

//---------------------------------------------------------
//YAHOO MULTILINE RESTYLE
//---------------------------------------------------------
//alternative code?
// import * as yf from 'yfinance';
// import * as pd from 'pandas';
// import * as plt from 'matplotlib/pyplot';
// import {Flask, render_template} from 'flask';
// import * as pymongo from 'pymongo';
// import {pprint} from 'pprint';

// var data, end_date, start_date, tickers_list;
// start_date = "2016-01-01";
// end_date = "2022-01-15";

// tickers_list = ["NTDOY", "SONY", "MSFT", "ATVI", "EA"];
// data = new pd.DataFrame({"columns": tickers_list});

// for (var ticker, _pj_c = 0, _pj_a = tickers_list, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
//     ticker = _pj_a[_pj_c];
//     data[ticker] = yf.download(ticker, start_date, end_date)["Adj Close"];
// }

// data.plot({"figsize": [10, 7]});
// plt.legend();
// plt.title("Gaming Stock Data", {"fontsize": 16});
// plt.ylabel("Price", {"fontsize": 14});
// plt.xlabel("Year", {"fontsize": 14});
// plt.grid({"which": "major", "color": "k", "linestyle": "-.", "linewidth": 0.5});