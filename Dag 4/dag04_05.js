

//JavaScript til håndteringen af geoLocation

var totalDistance = 0.0;
var lastLat;
var lastLong;

function updateStatus(message) {
    document.getElementById("status").innerHTML = message;
}

function loadDemo() {
    if(navigator.geolocation) {
        updateStatus("HTML5 Geolocation is supported in your browser.");
        navigator.geolocation.watchPosition(updateLocation,handleLocationError,{maximumAge:20000});
    }
}

window.addEventListener("load", loadDemo, true);

//Handler for failure
function handleLocationError(error) {
    switch (error.code) {
            case 0:
            updateStatus("There was an error while retrieving your location: " +
            error.message);
            break;
            case 1:
            updateStatus("The user prevented this page from retrieving a location.");
            break;
            case 2:
            updateStatus("The browser was unable to determine your location: " +
            error.message);
            break;
            case 3:
            updateStatus("The browser timed out before retrieving the location.");
            break;
    }
}

function updateLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var timestamp = position.timestamp;
    document.getElementById("latitude").innerHTML = latitude;
    document.getElementById("longitude").innerHTML = longitude;
    document.getElementById("accuracy").innerHTML = accuracy;
    document.getElementById("timestamp").innerHTML = timestamp;
    // sanity test... don't calculate distance if accuracy
    // value too large
    if (accuracy >= 500) {
        updateStatus("Need more accurate values to calculate distance.");
        return;
    }
    if ((lastLat !== null) && (lastLong !== null)) {
        var currentDistance = distance(latitude, longitude, lastLat, lastLong);
        document.getElementById("currDist").innerHTML = "Current distance traveled: " + currentDistance.toFixed(4) + " km";
        totalDistance += currentDistance;
        document.getElementById("totalDist").innerHTML = "Total distance traveled: " + totalDistance.toFixed(4) + " km";
    }
    lastLat = latitude;
    lastLong = longitude;
    updateStatus("Location successfully updated.");
}