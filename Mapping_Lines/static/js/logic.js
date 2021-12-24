// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -100.3790], 4);
// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790], //San Francisco Airport
  [31.8053, -106.3824], // El Paso Tx Airport
  [30.1975, -97.6664], // AUS Airport
  [40.6413, -73.7781], // JFK Airport
  [43.6777, -79.6248] //  YYZ Airport
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: "3",
  dashArray: "20,20",
  dashOffset: "0"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

