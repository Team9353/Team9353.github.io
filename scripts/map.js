var transport = $('#transportdrop')
var cityCircle;
var baseRadius = 5000;
var point = {
    lat: 33.77,
    lng: -84.39
}
function initialize() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 33.77,
            lng: -84.39
        },
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 33.77,
            lng: -84.39
        },
        map: map,
        draggable: true
    });


    var searchBox = new google.maps.places.SearchBox(document.getElementById('autocomplete'));
    google.maps.event.addDomListener(searchBox, 'places_changed', function() {
        var places = searchBox.getPlaces();
        var bounds = new google.maps.LatLngBounds();
        var i, place;

        for (i = 0; place = places[i]; i++) {
            bounds.extend(place.geometry.location);
            marker.setPosition(place.geometry.location);
            cityCircle = new google.maps.Circle({
                strokeColor: "#6eddff",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#6eddff",
                fillOpacity: 0.05,
                map: map,
                center: place.geometry.location,
                radius: baseRadius
            });
        }
        map.fitBounds(bounds);
        map.setZoom(12);
    })   
}


function redraw(mult) {
    baseRadius = baseRadius * mult;
    cityCircle.setRadius(baseRadius);
}