function initMap() {
    // The location of our marker
    var point = {lat: 33.77, lng: -84.39};
    // The map, centered at Van Leer
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 13, center: point});
    // The marker, positioned at Van Leer
    var marker = new google.maps.Marker({position: point, map: map});
    var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.05,
        map: map,
        center: point,
        radius: Math.sqrt(100) * 100
      });
  }