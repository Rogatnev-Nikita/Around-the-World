// map
L.mapbox.accessToken = 'pk.eyJ1IjoieWJyYm5maGp1Zm55dGQiLCJhIjoiY2lsdzJnZHdtMDA4eHZmbTY5YTlvaTZtdSJ9.V8utWdptmcKtbUYAd3Y0yw';
var map = L.mapbox.map('map').setView([40, 50], 4);
L.mapbox.styleLayer('mapbox://styles/ybrbnfhjufnytd/cim23zy5d00rlbkkk05etz3qm').addTo(map);


// markers
var myLayer = L.mapbox.featureLayer().addTo(map);
var marker_list = document.getElementById('marker_list');
myLayer.setGeoJSON([{
	"type": "FeatureCollection",
	"features": [
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im21dxz40",
			"description": "Russia",
            "title": "1. Sankt-Peterburg",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [30.3002,59.9454],
			"type": "Point"
		},
		"id": "38e44446f43ad02a997d6189a16e6016"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im21ff9c1",
			"description": "Russia",
			"title": "2. Vladikavkaz",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [44.6678,43.0367],
			"type": "Point"
		},
		"id": "94d6ff3c3e8c9823766725a31b6c19a8"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im21g0oy2",
			"description": "Georgia",
			"title": "3. Tbilisi",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [44.780812,41.714539],
			"type": "Point"
		},
		"id": "7acd01b46e99aaa2420a02a6422156d8"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im21uv6f1",
			"description": "United Arab Imirates",
			"title": "4. Dubai",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [55.364821,25.253066],
			"type": "Point"
		},
		"id": "c86a00081b96f6a058980b2b29ebee9d"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im21yull2",
			"description": "India",
			"title": "5. New Delhi",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [77.1185,28.644],
			"type": "Point"
		},
		"id": "656bb66efafd15888d810f251966b93d"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im220ta13",
			"description": "Singapore",
			"title": "6. Kuala Lumpur",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [101.660196,3.124578],
			"type": "Point"
		},
		"id": "c7e5452863bfa6c2a2490ecc6d9e9578"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im2244sb4",
			"description": "Cambodia",
			"title": "7. Phnom Penh",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [104.914832,11.564125],
			"type": "Point"
		},
		"id": "e1d6c8b214e8ba54a4d6c8c59dd20e20"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im232o3i1",
			"description": "China",
			"title": "8. Beijing",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [116.390876,39.916582],
			"type": "Point"
		},
		"id": "1b00797d2bc1d6fda8af6b63213505ba"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22m6rfb",
			"description": "China",
			"title": "8. Hong Kong",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [114.164054,22.25959],
			"type": "Point"
		},
		"id": "e8a8cfd2937811cff0b8215e86580b9c"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22x3oe0",
			"description": "USA",
			"title": "9. Honolulu",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-157.8557,21.3045],
			"type": "Point"
		},
		"id": "e1d7e0c613d56c26a774bc203b27c2c6"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22ef230",
			"description": "USA",
						"title": "10. San Francisco",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-122.463,37.7648],
			"type": "Point"
		},
		"id": "fb060f3b5f4cff1f4045c72e20f47f4b"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22ex8s1",
			"description": "USA",
						"title": "11. Los Angeles",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-118.2439,34.0544],
			"type": "Point"
		},
		"id": "6fedfe3231534d204d88a750dc7ee54f"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22ff2e2",
			"description": "USA",
						"title": "12. Las Vegas",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-115.1492,36.1663],
			"type": "Point"
		},
		"id": "d7956069ee8a31cb84f8580cd88f4b01"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22fxuq3",
			"description": "USA",
						"title": "13. Grand Canyon",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-112.0985,36.0966],
			"type": "Point"
		},
		"id": "056d5ff63a5414fc8cff230f6e23b87c"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22gkx54",
			"description": "USA",
						"title": "14. New Orleans",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-90.0701,29.9499],
			"type": "Point"
		},
		"id": "95e58df82e0ae978062ee4ca605f1c59"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22h09l5",
			"description": "USA",
						"title": "15. Tampa",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-82.4584,27.9478],
			"type": "Point"
		},
		"id": "5d7aa3545718e8cf04b247f51d75fecc"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22hb8b6",
			"description": "USA",
						"title": "16. Miami",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-80.1937,25.7743],
			"type": "Point"
		},
		"id": "71b07278131e748003e7c77aab60f26a"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22ht1l7",
			"description": "USA",
						"title": "17. Washington",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-77.0366,38.895],
			"type": "Point"
		},
		"id": "c042df31f414e7707b4bd6e6b621c74e"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22i8rw8",
			"description": "USA",
						"title": "18. New York",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-73.9808,40.7648],
			"type": "Point"
		},
		"id": "509590f083f678bad3126201f403572a"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22kppaa",
			"description": "Brazil",
						"title": "19. Rio de Janeiro",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [-43.3307,-22.9201],
			"type": "Point"
		},
		"id": "92a9169a7c152bb649efb2778bbfb356"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im22jr1r9",
			"description": "South Africa",
			"title": "20. Cape Town",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [18.4232,-33.9258],
			"type": "Point"
		},
		"id": "9cf62479835bf3ce37aaa48b99a7171a"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im2367iz2",
			"description": "Netherlands",
			"title": "21. Amsterdam",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [4.8897,52.374],
			"type": "Point"
		},
		"id": "31b4805d37aaa00218bb8f637fcda89f"
	},
	{
		"type": "Feature",
		"properties": 	{
			"id": "marker-im236w743",
			"description": "Russia",
			"title": "22. Moskva",
			"marker-size": "large",
			"marker-color": "#1087bf",
			"marker-symbol": ""
		},
		"geometry": 	{
			"coordinates": [37.6067,55.7617],
			"type": "Point"
		},
		"id": "3e16d5a87021ebd2fee95d4546a9e48f"
	}
    ],
	"id": "ybrbnfhjufnytd.pfed98ij"
}]);



// menu
myLayer.eachLayer(function(marker) {
	var link = marker_list.appendChild(document.createElement('a'));
	link.className = 'marker_item';
	link.href = '#';
	link.innerHTML = marker.feature.properties.title +
		'<br /><small>' + marker.feature.properties.description + '</small>';
	link.onclick = function() {
		if (/active/.test(this.className)) {
			this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
		} else {
			var siblings = marker_list.getElementsByTagName('a');
			for (var i = 0; i < siblings.length; i++) {
				siblings[i].className = siblings[i].className
					.replace(/active/, '').replace(/\s\s*$/, '');
			};
			this.className += ' active';
			map.panTo(marker.getLatLng());
			marker.openPopup();
		}
		return false;
	};
});