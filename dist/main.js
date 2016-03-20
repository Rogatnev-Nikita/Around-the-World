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
		L.latLng(39.9390623,116.2570346)/*,
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
		L.latLng(59.7986826,30.2718243)*/
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