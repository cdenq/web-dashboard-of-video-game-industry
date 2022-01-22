//---------------------------------------------------------
//INITIAL GOOGLE GEOMAP
//---------------------------------------------------------
function graphGoogleGeo(data, gameTitle) {
    // match the title to the mongodb list
    let gameTitleList = ["apex", "csgo", "dota", "gta", "rust"];
    let realTitleList = ["Apex", "CSGO", "Dota 2", "GTA V", "Rust"];
  
    if (gameTitle == gameTitleList[0]) {
      realTitle = realTitleList[0];
    } else if (gameTitle == gameTitleList[1]) {
      realTitle = realTitleList[1];
    } else if (gameTitle == gameTitleList[2]) {
      realTitle = realTitleList[2];
    } else if (gameTitle == gameTitleList[3]) {
      realTitle = realTitleList[3];
    } else {
      realTitle = realTitleList[4];
    };

    // Add a tile layer.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })

    var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // Only one base layer can be shown at a time.
    var baseMaps = {
        Street: street,
        Topography: topo
    };

    // console.log();
    // console.log(realTitle);
    // console.log(data[4]['Apex']);

    // An array that will store the created circle layer
    let circles = [];

    // Loop through the cities array, and create one marker for each city object.
    for (let i = 0; i < data.length; i++) {
        // Conditionals for state points
        let colorRadius = "";
        let gValue = data[i][realTitle];

        if (gValue > 75) {
            colorRadius = "red";
        }
        else if (gValue > 50) {
            colorRadius = "yellow";
        }
        else if (gValue > 25) {
            colorRadius = "green";
        }
        else {
            colorRadius = "blue";
        }

        // console.log(data[i]['Latitude']);
        // console.log(gLocation);
        // console.log(gValue/10);
        // console.log(`${data[i]['Region']}, ${data[i]['State']}`)
        let gLocation = [data[i]['Latitude'], data[i]['Longitude']];

        // Add circles to the map.
        circles.push(
            L.circle(gLocation, {
                fillOpacity: 100,
                color: "white",
                fillColor: colorRadius,
                // Adjust the radius.
                radius: gValue*2000
            }).bindPopup(`<h3>${data[i]['Region']}, ${data[i]['State']}</h3> <hr> <h6>SPI: ${gValue}</h6>`)
        );
    };

    //intialize the circle layer
    let circleLayer = L.layerGroup(circles);

    // Overlays that can be toggled on or off
    let overlayMaps = {
        SPI: circleLayer
    };

    // Create a map object and set default
    let myMap = L.map("map", {
        //center location for USA
        center: [39.131742442581846, -95.55603094725282],
        zoom: 4,
        layers: [street, circleLayer]
    });

    // Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);
};

//---------------------------------------------------------
//RESTYLE GOOGLE GEOMAP
//---------------------------------------------------------
function restyleGoogleGeo(data, value) {
    // console.log(`restyle geo receives [${value}]`);
    // console.log(data);
    map.remove();
    let targetDiv = document.getElementById('ADD');
    let newMapDiv = document.createElement("div");
        newMapDiv.id = "map";
        newMapDiv.style.width = "700px";
        newMapDiv.style.height = "350px";
    targetDiv.appendChild(newMapDiv);
    graphGoogleGeo(data, value)
};