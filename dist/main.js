/* map */
L.mapbox.accessToken = 'pk.eyJ1IjoieWJyYm5maGp1Zm55dGQiLCJhIjoiY2lsdzJnZHdtMDA4eHZmbTY5YTlvaTZtdSJ9.V8utWdptmcKtbUYAd3Y0yw';
var map = L.mapbox.map('map', 'ybrbnfhjufnytd.pfed98ij').setView([40, 50], 4);
/* L.mapbox.styleLayer('mapbox://styles/mapbox/emerald-v8').addTo(map); */

/* marker-list */
var markerList = document.getElementById('marker-list');
map.featureLayer.on('ready', function(e) {
	map.featureLayer.eachLayer(function(layer) {
		var item = markerList.appendChild(document.createElement('div'));
		item.className = "marker-item";
		item.innerHTML = layer.toGeoJSON().properties.title;
		item.onclick = function() {
			map.setView(layer.getLatLng(), 7);
			layer.openPopup();
		};
	});
});