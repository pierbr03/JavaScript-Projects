function first_Dictionary() {
    var sports_Car = {
        Brand: "Nissan",
        Model: "Skyline",
        Color: "White",
        HP: "300 Horsepower",
        Cost: 20000
    };
    delete sports_Car.Model;
    document.getElementById("Dictionary").innerHTML = sports_Car.Model;
    document.getElementById("Dictionary2").innerHTML = sports_Car.HP;
}