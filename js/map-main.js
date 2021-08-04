'use strict'
const EILAT={lat:29.510287,lng: 34.922468};

const gMap = new google.maps.Map(document.getElementById("map"),
{zoom:15,center:EILAT});

function initMap(){
    google.maps.event.addListener(gMap, "click", (event) => {
        addMarker(event.latLng, gMap);
      });

}
function onMyPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }

    // One shot position getting or continus watch
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
    // navigator.geolocation.watchPosition(showLocation, handleLocationError);
}
function showLocation(position) {
    var lat=position.coords.latitude;
    var lng=position.coords.longitude;
    setPosition(lat,lng,'My location');
    initMap();

    // map.setCenter(new google.maps.LatLng(lat,lng));
}
function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}
function setPosition(lat,lng,title){
    gMap.setCenter(new google.maps.LatLng(lat,lng));
    var marker=new google.maps.Marker({
        position:  {lat,lng},
        map: gMap,
        title
    });
    
}
function addMarker(location, map) {

    new google.maps.Marker({
      position: location,
      map: map,
    });
  }
