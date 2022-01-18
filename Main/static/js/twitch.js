// Pull in collection from MongoDB
async function pull () {

  // Fetch the local json data and assign it to the global variable 'data'
  const response = await fetch("../../../Raw/twitch_views/data.json");
  data = await response.json();
  console.log(data);

}

function buildChart(barchart) {

    // Filter the data to the specific game we are interested in, there will be only one result
    const result = data.game.filter(sampleObj => sampleObj._id == sample)[0];

    // Build a Bar Chart
    var yticks = result.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    var barData = [
      {
        y: yticks,
        x: result.sample_values.slice(0, 10).reverse(),
        text: result.otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h",
      }
    ];

    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 }
    };

    Plotly.newPlot("bar", barData, barLayout);

}


// Initialize the application
let data = {};
main();
