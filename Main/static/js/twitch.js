//---------------------------------------------------------
//TWITCH VIEWS
//---------------------------------------------------------
function twitchData(data, title) {

  let views = data.map(item => item[1]);
  let title = ["apex", "csgo", "dota", "gta", "rust"]
  let realTitle = ["Apex Legends", "Counter-Strike: Global Offensive", "Dota 2", "Grand Theft Auto V", "Rust"];
  let average = 95600

 
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

  Plotly.newPlot("twitch", traceData, barLayout);
};
