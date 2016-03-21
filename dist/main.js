/*
var map = L.map('map');

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png').addTo(map);

var control = L.Routing.control({
	waypoints: [
		L.latLng(59.7986826,30.2718243),
		L.latLng(43.0293149,44.6266079),
		L.latLng(41.732566,44.768642),
		L.latLng(24.7255541,46.5416661),
		L.latLng(24.3867961,54.4194828),
		L.latLng(25.0741029,55.0894192),
		L.latLng(28.6456704,76.9503323),
		L.latLng(12.9542944,77.4905141),
		L.latLng(3.1390881,101.6517503),
		L.latLng(1.3457398,103.7553802),
		L.latLng(13.7248944,100.4926854),
		L.latLng(11.579524,104.8199757),
		L.latLng(22.3595821,114.0004434),
		L.latLng(39.9390623,116.2570346),
		L.latLng(21.3281101,-157.8340879),
		L.latLng(37.7577627,-122.4727051),
		L.latLng(34.0207037,-118.5521572),
		L.latLng(36.1251182,-115.2452109),
		L.latLng(36.0299597,-112.1903671),
		L.latLng(35.0825301,-106.7466904),
		L.latLng(35.4828462,-97.619622),
		L.latLng(27.9964028,-82.5244087),
		L.latLng(25.782397,-80.2661852),
		L.latLng(38.8994613,-77.0847774),
		L.latLng(40.7058249,-74.1184278),
		L.latLng(19.3908821,-99.2138237),
		L.latLng(9.9356561,-84.1308975),
		L.latLng(-22.91106,-43.5185449),
		L.latLng(40.4380637,-3.7497475),
		L.latLng(-33.9140975,18.3752024),
		L.latLng(30.0595581,31.2233592),
		L.latLng(59.7986826,30.2718243)
	],
	geocoder: L.Control.Geocoder.nominatim(),
    routeWhileDragging: false,
    reverseWaypoints: false,
    showAlternatives: false,
    altLineOptions: {
        styles: [
            {color: 'black', opacity: 0.15, weight: 9},
            {color: 'white', opacity: 0.8, weight: 6},
            {color: 'blue', opacity: 0.5, weight: 2}
        ]
    }
}).addTo(map);

L.Routing.errorControl(control).addTo(map);
*/


    L.mapbox.accessToken = 'pk.eyJ1IjoieWJyYm5maGp1Zm55dGQiLCJhIjoiY2lsdzJnZHdtMDA4eHZmbTY5YTlvaTZtdSJ9';
    var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([37.7729, -122.4333], 13);
    map.on('click', function(e) {
        // Let's add a callback to makeMarker so that it can draw the route only
        // *after* it's done processing the marker adding.
        makeMarker(e, drawRoute);
    });
    var waypoints = [];
    var polyline = L.polyline([]).addTo(map);
    function makeMarker(e, done) {
        var marker = L.marker(e.latlng, { draggable: true }).addTo(map);
        marker.on('dragend', drawRoute);
        waypoints.push(marker);
        return done();
    }
    function drawRoute() {
        if (waypoints.length < 2) return;
        // Directions API request looks like
        // http://api.tiles.mapbox.com/v4/directions/mapbox.driving/
        //    -122.42,37.78;-77.03,38.91.json?access_token={access_token}
        // We'll construct this using latlngs from the markers in waypoints.
        var points = waypoints.map(function(marker) {
            var latlng = marker._latlng;
            return [latlng.lng, latlng.lat].join(',');
        }).join(';');
        var directionsUrl = 'http://api.tiles.mapbox.com/v4/directions/mapbox.driving/' +
        points + '.json?access_token=' + L.mapbox.accessToken;
        $.get(directionsUrl, function(data) {
            // Do something with the directions returned from the API.
            var route = data.routes[0].geometry.coordinates;
            route = route.map(function(point) {
                // Turns out if we zoom out we see that the lat/lngs are flipped,
                // which is why it didn't look like they were being added to the
                // map. We can invert them here before drawing.
                return [point[1], point[0]];
            });
            polyline.setLatLngs(route);
        });
    }