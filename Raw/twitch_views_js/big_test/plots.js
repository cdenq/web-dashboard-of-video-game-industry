function buildCharts(data, title) {

      let views = data.map(item => item[VIEWS]);
      let title = ["apex", "csgo", "dota", "gta", "rust"]
      let realTitle = ["Apex Legends", "Counter-Strike: Global Offensive", "Dota 2", "Grand Theft Auto V", "Rust"];
      let average = 95600
      newData = []
      
      if (title == 'apex') {
        realTitle = "Apex Legends";
        newData = data.map(item => item['Apex Legends']);
      } else if (title == 'csgo') {
        realTitle = "Counter-Strike: Global Offensive"
        newData = data.map(item => item['Counter-Strike: Global Offensive']);
      } else if (title = "dota") {
        realTitle = "Dota 2" 
        newData = data.map(item => item['Dota 2']);
      } else if (title = "gta"){
        realTitle = "Grand Theft Auto V"
        newData = data.map(item => item['Grand Theft Auto V']);
      } else if (title = "rust"){
        realTitle = "Rust"
        newData = data.map(item => item['Rust']);
      }
     
      var barData = [
        {
          y: result[realTitle],
          x: views,
          type: "bar",
          orientation: "h",
        }
      ];
      let avgData = {
          y: average,
          x: 'Average Top 5',
          type: "bar",
          orientation: "h"
        };
      
      let traceData = [barData, avgData]
  
      var barLayout = {
        title: "Views Per Game",
        margin: { t: 30, l: 150 }
      };
  
      Plotly.newPlot("twitch", traceData, barLayout);
  };

  // async function buildMetadata(sample) {
    
    
  //   // Filter the data for the object with the desired sample number
  //   const result = data.metadata.filter(sampleObj => sampleObj.id == sample)[0];
  
  //   // Select the panel with id of `#sample-metadata`
  //   const panel = document.querySelector("#sample-metadata");
  
  //   // Clear any existing metadata
  //   panel.innerHTML = "";
  
  //   // Use `Object.entries` to add each key and value pair to the panel
  //   // Hint: Inside the loop, you will need to to append new
  //   // elements for each key-value in the metadata.
  //   Object.entries(result).forEach(([key, value]) => {
  //     const h6 = document.createElement("h6");
  //     h6.textContent = `${key.toUpperCase()}: ${value}`
  //     panel.append(h6);
  //   });
  
  //   // BONUS: Build the Gauge Chart
  //   buildGauge(result.wfreq);
  
  // }
  
  
  // // Initialize the application
  // let data = {};
  // main();


  //---------------------------------------------------------
// //TWITCH VIEWS
// //---------------------------------------------------------
// function twitchbar(results, title) {

//   var Viewdata = [
//     {
//       x: ['Counter Strike: Global Offensive', 'Dota 2', 'Rust', 'Apex Legends', 'Grand Theft Auto V'],
//       y: [5000,72900,21900,93200,285000],
//       type: 'bar',
//       title: 'Total Views (Rounded to Nearest 1000)'
//     }];
    
//     var layout = {
//       height: 400,
//       width: 500
//      };      
//         annotation: {
//           annotations: [{
//               type: 'line',
//               mode: 'horizontal',
//               scaleID: 'y-axis-0',
//               value: '95600',
//               borderColor: 'tomato',
//               borderWidth: 1
//           }]
//       }
    
//     Plotly.newPlot('twitch', Viewdata, layout);
  
//   };
  
  // twitchbar()







  // function twitchbar(results, title) {

  //   var Viewdata = [{
  //       x: ['Counter Strike: Global Offensive', 'Dota 2', 'Rust', 'Apex Legends', 'Grand Theft Auto V'],
  //       y: [51200,65000,88000,88900,214000],
  //       type: 'bar',
  //       shapes: [{
  //         type: 'line',
  //         x0: 0,
  //         y0: 507100,
  //         x1: 1,
  //         y0: 507100,
  //         line: {
  //           color: 'red',
  //           width: 2,
  //           dash: 'dot'
  //         }
  //       }]
  //     }];
      // let avgData = {
      //   y: 507100,
      //   x: 'Average Top 5',
      //   type: "bar",
      //   orientation: "h"
      // };
  
  //     var layout = {
  //       height: 600,
  //       width: 900,
  //       title: "Weekly Twitch Views",
  //       xaxis:{
  //         title: 'Video Game',
  //       },
  //       yaxis:{
  //         title: "Number of Views",
  //       },
  //      };      
      
  //     Plotly.newPlot('twitch', Viewdata, layout);
    
  //   };
    
  // twitchbar()
  
  
  
  
  
  
  
  //---------------------------------------------------------
  //TWITCH VIEWS INTERACTIVE
  //---------------------------------------------------------
  // console.log('hi')
  
  // function twitchbar(data, gameTitle) {
  
  //   let twitchtitle = `${gameTitle}' Views on Twitch.tv`
  
  //   let views = data.map(item => item[1]);
  //   var gameTitle = ["apex", "csgo", "dota", "gta", "rust"];
  //   let realTitle = ["Apex Legends", "Counter-Strike: Global Offensive", "Dota 2", "Grand Theft Auto V", "Rust"];
  //   let average = 95600
  
  //    var barData = [
  //     {
  //       y: result[realTitle],
  //       x: views,
  //       type: "bar",
  //       orientation: "h",
  //     }
  //   ];
  //   let avgData = {
  //       y: average,
  //       x: 'Average Top 5',
  //       type: "bar",
  //       orientation: "h"
  //     };
    
  //   let traceData = [barData, avgData]
  
  //   var barLayout = {
  //     title: "Views Per Game",
  //     margin: { t: 30, l: 150 }
  //   };
  
  //   newData = []
    
  //   if (gameTitle == 'apex') {
  //     realTitle = "Apex Legends";
  //     newData = data.map(item => item['Apex Legends']);
  //   } else if (gameTitle == 'csgo') {
  //     realTitle = "Counter-Strike: Global Offensive"
  //     newData = data.map(item => item['Counter-Strike: Global Offensive']);
  //   } else if (gameTitle = "dota") {
  //     realTitle = "Dota 2" 
  //     newData = data.map(item => item['Dota 2']);
  //   } else if (gameTitle = "gta"){
  //     realTitle = "Grand Theft Auto V"
  //     newData = data.map(item => item['Grand Theft Auto V']);
  //   } else if (gameTitle = "rust"){
  //     realTitle = "Rust"
  //     newData = data.map(item => item['Rust']);
  //   }
  
  //   Plotly.newPlot("twitch", traceData, barLayout);
  // // };
  // >>>>>>> Stashed changes



  //---------------------------------------------------------
//GOOGLE MULTILINE RESTYLE VIA INDEX
//---------------------------------------------------------
function restyleTwitch(value) {
  // Initialize an empty array for the country's data
  let newData = [];

  if (event.target.value == 'apex') {
        newData = data.map(item => item[7][1]);
    } else if (event.target.value == 'csgo') {
        newData = data.map(item => item[18][1]);
    } else if (event.target.value == 'dota') {
        newData = data.map(item => item[27][1]);
    } else if (event.target.value == 'gta') {
        newData = data.map(item => item[43][1]);
    } else { //is rust
        newData = data.map(item => item[74][1]);
    };

  Plotly.restyle("twitch", "y", [newData]);
};