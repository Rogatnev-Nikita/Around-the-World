var map = L.map('map');

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png').addTo(map);


var control = L.Routing.control({
	waypoints: [
		L.latLng(57.74, 11.94),
		L.latLng(57.6792, 11.949),
		L.latLng(55.74, 15.94),
		L.latLng(55.6792, 15.949)
	],
	geocoder: L.Control.Geocoder.nominatim(),
    routeWhileDragging: true,
    reverseWaypoints: true,
    showAlternatives: true,
    altLineOptions: {
        styles: [
            {color: 'black', opacity: 0.15, weight: 9},
            {color: 'white', opacity: 0.8, weight: 6},
            {color: 'blue', opacity: 0.5, weight: 2}
        ]
    }
}).addTo(map);

L.Routing.errorControl(control).addTo(map);