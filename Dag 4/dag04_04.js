//Tjekker browserkompabilitet
function loadDemo() {
    if(navigator.geolocation) {
        document.getElementById("support").innerHTML = "HTML5 Geolocation supported.";
    }else {
    document.getElementById("support").innerHTML = "HTML5 Geolocation is not supported in your browser.";
    }
}

//*** GeoLokation start***///

//geoLocation.getCurrentPosition() med et argument
function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, handleLocationError, {timeout:10000});
    } else {
        document.getElementById("lokation").innerHTML="Geolocation is not supported by this browser.";
    }
}
//Happy scenarie
function showPosition(position){
    console.log(position);
    document.getElementById("lokation").innerHTML="Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
//Fail scenarie
function handleLocationError(error) {
    switch(error.code){
            case 0:
            updateStatus("There was an error while retrieving your location: " + error.message);
            break;    
            case 1:
            updateStatus("The user prevented this page from retrieving a location.");
            break;
            case 2:
            updateStatus("The browser was unable to determine your location: " + error.message);
            break;
            case 3:
            updateStatus("The browser timed out before retrieving the location.");
            break;
    }
}

//geoLocation.watchPosition()
//watchPosition opdaterer updateLocation løbende
//Man slukker for opdateringer ved hjælp af clearWatch()
//var watchId = navigator.geolocation.watchPosition(updateLocation, handleLocationError);
// do something fun with the location updates!
// ...
// OK, now we are ready to stop receiving location updates
//navigator.geolocation.clearWatch(watchId);

//*** GeoLokation slut ***///