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
    var baseRadius = 5000;
    google.maps.event.addDomListener(searchBox, 'places_changed', function() {
        var places = searchBox.getPlaces();
        var bounds = new google.maps.LatLngBounds();
        var i, place;

        for (i = 0; place = places[i]; i++) {
            bounds.extend(place.geometry.location);
            marker.setPosition(place.geometry.location);
            var cityCircle = new google.maps.Circle({
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
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