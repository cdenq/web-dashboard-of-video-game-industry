//---------------------------------------------------------
//INITIAL GOOGLE GEOMAP
//---------------------------------------------------------
function graphGoogleGeo(data) {
    // Create a map object.
    let myMap = L.map("map", {
        center: [15.5994, -28.6731],
        zoom: 3
    });

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    // Loop through the cities array, and create one marker for each city object.
    for (var i = 0; i < googleGeoData.length; i++) {
        // Conditionals for country points
        var color = "";
        if (googleGeoData[2].points > 75) {
        color = "red";
        }
        else if (googleGeoData[2].points > 50) {
        color = "yellow";
        }
        else if (googleGeoData[2].points > 25) {
        color = "green";
        }
        else {
        color = "blue";
        }
    
        // Add circles to the map.
        L.circle(countries[i].location, {
        fillOpacity: 0.75,
        color: "white",
        fillColor: color,
        // Adjust the radius.
        radius: Math.sqrt(countries[i].points) * 10000
        }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>Points: ${countries[i].points}</h3>`).addTo(myMap);
    }
};

//---------------------------------------------------------
//RESTYLE GOOGLE GEOMAP
//---------------------------------------------------------
function restyleGoogleGeo(data) {
};