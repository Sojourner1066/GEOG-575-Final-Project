//insert code here!

var map;
mapboxgl.accessToken = 'pk.eyJ1IjoibG1jY2xpbnRvY2syIiwiYSI6ImNsbzY0c2IweTBnNXcycm84dnEyMXBvaHAifQ.gZQ4VJyURj991pygjGxm3w'


//create the map
map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/lmcclintock2/clv33n4v401xx01pebykv37ls', // style URL
    center: [-100, 40], // starting position [lng, lat]
    zoom: 4 // starting zoom

});
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-right'
);


