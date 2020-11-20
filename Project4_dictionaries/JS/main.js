function first_Dictionary() {
    var sports_Car = { //This is the Dictionary 
        Brand: "Nissan", //Here the key is Brand and the value is Nissan 
        Model: "Skyline", //Here the Key is Model and the value is Skyline
        Color: "White", //Here the key is color and the value is White
        HP: "300 Horsepower", //Here the key is HP or Horse Power and the value is 300 horse power
        Cost: 20000 //Finally the key is cost and the value is 20000
    };
    delete sports_Car.Model; //Because I used the delete operator for the key model, the output of the code displays undefined
    document.getElementById("Dictionary").innerHTML = sports_Car.Model; //Here was the value that was undefined
    document.getElementById("Dictionary2").innerHTML = sports_Car.HP; //This pulls the key value HP from our function and displays 300 Horsepower
}