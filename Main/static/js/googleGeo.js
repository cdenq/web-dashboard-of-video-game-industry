//---------------------------------------------------------
//INITIAL GOOGLE GEOMAP
//---------------------------------------------------------
function graphGoogleGeo(data, title) {
    // Create a map object.
    let myMap = L.map("map", {
        //center location for USA
        center: [37.0902, 95.7129],
        zoom: 3
    });

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    // Loop through the cities array, and create one marker for each city object.
    for (let i = 0; i < data.length; i++) {
        // Conditionals for state points
        let color = "";
        if (data[i][title] > 75) {
        color = "red";
        }
        else if (data[i][title] > 50) {
        color = "yellow";
        }
        else if (data[i][title] > 25) {
        color = "green";
        }
        else {
        color = "blue";
        }
    
        // Add circles to the map.
        L.circle([data[i].Latitude, data[i].Longitude], {
            fillOpacity: 0.75,
            color: "white",
            fillColor: color,
            // Adjust the radius.
            radius: data[i][title] / 10
        }).bindPopup(`<h1>${data[i].Region}, ${data[i].State}</h1> <hr> <h3>Points: ${data[i][title]}</h3>`).addTo(myMap);
    }
};

//---------------------------------------------------------
//RESTYLE GOOGLE GEOMAP
//---------------------------------------------------------