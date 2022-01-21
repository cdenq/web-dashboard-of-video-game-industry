async function main() {

    // Fetch the local json data and assign it to the global variable 'data'
    const response = await fetch("./views2.json");
    data = await response.json();
    console.log(data)
  
  
    // Use the sample names in the data to populate the select box with options
    data.GAMES.forEach(sample => {
      const option = document.createElement("option");
      option.textContent = sample;
      document.querySelector("#selDataset").append(option);
    });
  
  
    // Setup an event listener on the select box to change the charts when a new sample is selected
    document.querySelector("#selDataset").addEventListener("change", event => {
      buildCharts(event.target.value);
      buildMetadata(event.target.value);
    })
  
  
    // Set the inital value for the select box
    document.querySelector("#selDataset").value = data.GAMES[0];
  
  
    // Use the first sample from the list to build the initial plots
    buildCharts(data.GAMES[0]);
    buildMetadata(data.GAMES[0]);
  }
  
  
  
  function buildCharts(gamebar) {
  
      // Filter the data to the specific sample we are interested in, there will be only one result
      const result = data.metadata.filter(sampleObj => sampleObj.VIEWS == gamebar)[0];
  
      // // Build a Bubble Chart
      // var bubbleLayout = {
      //   title: "Bacteria Cultures Per Sample",
      //   margin: { t: 0 },
      //   hovermode: "closest",
      //   xaxis: { title: "OTU ID" },
      //   margin: { t: 30}
      // };
  
      // var bubbleData = [
      //   {
      //     x: result.otu_ids,
      //     y: result.sample_values,
      //     text: result.otu_labels,
      //     mode: "markers",
      //     marker: {
      //       size: result.sample_values,
      //       color: result.otu_ids,
      //       colorscale: "Earth"
      //     }
      //   }
      // ];
  
      // Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  
      var yticks = result.GAME.slice(0, 10).map(gameID => `Game ${gameID}`).reverse();
      var barData = [
        {
          y: yticks,
          x: result.VIEWS.slice(0, 10).reverse(),
          text: result.GAME.slice(0, 10).reverse(),
          type: "bar",
          orientation: "h",
        }
      ];
  
      var barLayout = {
        title: "Views Per Game",
        margin: { t: 30, l: 150 }
      };
  
      Plotly.newPlot("bar", barData, barLayout);
  
  }
  
  
  async function buildMetadata(sample) {
    
    
    // Filter the data for the object with the desired sample number
    const result = data.metadata.filter(sampleObj => sampleObj.id == sample)[0];
  
    // Select the panel with id of `#sample-metadata`
    const panel = document.querySelector("#sample-metadata");
  
    // Clear any existing metadata
    panel.innerHTML = "";
  
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to to append new
    // elements for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      const h6 = document.createElement("h6");
      h6.textContent = `${key.toUpperCase()}: ${value}`
      panel.append(h6);
    });
  
    // BONUS: Build the Gauge Chart
    buildGauge(result.wfreq);
  
  }
  
  
  // Initialize the application
  let data = {};
  main();