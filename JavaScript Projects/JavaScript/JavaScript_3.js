function displayType(vehicle) {
    var vehicleType = vehicle.getAttribute("data-vehicle-type");
    alert(vehicleType + "is a " + vehicle.innerHTML + "! ");
}