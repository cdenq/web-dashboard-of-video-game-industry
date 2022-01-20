//---------------------------------------------------------
//YAHOO MULTILINE INIT
//---------------------------------------------------------
function graphYahoo() {
};


import * as yf from 'yfinance';
import * as pd from 'pandas';
import * as plt from 'matplotlib/pyplot';
import {Flask, render_template} from 'flask';
import * as pymongo from 'pymongo';
import {pprint} from 'pprint';


var data, end_date, start_date, tickers_list;
start_date = "2016-01-01";
end_date = "2022-01-15";

tickers_list = ["NTDOY", "SONY", "MSFT", "ATVI", "EA"];
data = new pd.DataFrame({"columns": tickers_list});

for (var ticker, _pj_c = 0, _pj_a = tickers_list, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
    ticker = _pj_a[_pj_c];
    data[ticker] = yf.download(ticker, start_date, end_date)["Adj Close"];
}

data.plot({"figsize": [10, 7]});
plt.legend();
plt.title("Gaming Stock Data", {"fontsize": 16});
plt.ylabel("Price", {"fontsize": 14});
plt.xlabel("Year", {"fontsize": 14});
plt.grid({"which": "major", "color": "k", "linestyle": "-.", "linewidth": 0.5});

//----- Or the below code -------

// var trace1 = {
//     x: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
//     y: [20, 25, 50, 45, 50, 75, 60],
//     mode: 'lines+markers',
//     name: 'NTDOY'
//   };
  
//   var trace2 = {
//     x: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
//     y: [25, 35, 50, 50, 75, 100, 125],
//     mode: 'lines+markers',
//     name: 'SONY'
//   };
  
//   var trace3 = {
//     x: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
//     y: [50, 60, 85, 95, 155, 225, 325],
//     mode: 'lines+markers',
//     name: 'MSFT'
//   };
  
//   var trace4 = {
//     x: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
//     y: [45, 45, 55, 52, 75, 90, 55],
//     mode: 'lines+markers',
//     name: 'ATVI'
//   };
  
//   var trace5 = {
//     x: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
//     y: [60, 75, 105, 85, 105, 145, 135],
//     mode: 'lines+markers',
//     name: 'EA'
//   };
  
//   var data = [ trace1, trace2, trace3, trace4, trace5];
  
//   var layout = {
//     title:'Yahoo Gaming Stock Data'
//   };
  
//   Plotly.newPlot('myDiv', data, layout);


//---------------------------------------------------------
//YAHOO MULTILINE RESTYLE
//---------------------------------------------------------
function restyleYahoo() {
};