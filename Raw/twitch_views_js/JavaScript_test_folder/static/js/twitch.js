//---------------------------------------------------------
//TWITCH VIEWS
//---------------------------------------------------------

 // Fetch the local json data and assign it to the global variable 'data'
const response = await fetch("../../views.json");
data = await response.json();
console.log(data);


function twitchbar() {

var Viewdata = [
  {
    x: ['Counter Strike: Global Offensive', 'Dota 2', 'PUBG: Battlegrounds', 'Apex Legends', 'Grand Theft Auto V'],
    y: [5000,72900,21900,93200,285000],
    type: 'bar',
    title: 'Total Views (Rounded to Nearest 1000)'
  }];
  
  var layout = {
    height: 400,
    width: 500
   };      
      annotation: {
        annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: '95600',
            borderColor: 'tomato',
            borderWidth: 1
        }]
    }
  
  Plotly.newPlot('twitch', Viewdata, layout);

};

twitchbar()
