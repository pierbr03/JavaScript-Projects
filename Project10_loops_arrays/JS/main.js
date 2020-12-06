var X = "Lexus";
document.write(X);
{
    let X = "Nissan";
    document.write("<br>" + X);
}



function Call_Loop() {
var Digit = "";
var X = 1;
while (X < 11) {
    Digit += "<br>" + X;
    X++;
}

document.getElementById("Loop").innerHTML = Digit;

}


function str_Length_Function() {
    var str = "Nissan Skyline R32 GTR";
    var n = str.length;
    document.getElementById("length").innerHTML = n;
}


var Instruments = ["Guitar", "Drums", "Bass", "Piano", "Trumpet"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}



function array_Function() {
    var guitars = [];
    guitars[0] = "Chapman";
    guitars[1] = "PRS";
    guitars[2] = "Fender";
    guitars[3] = "Gibson";
    guitars[4] = "ESP";
    guitars[5] = "Ibanez";
    document.getElementById("Array").innerHTML = "My favorite guitars to play are " +
        guitars[4] + " guitars.";
}

function car_Function() {
    const sports_Car = {type: "car", brand:"Lexus", model:"LFA", color: "black"};
    sports_Car.color = "purple";
    sports_Car.price = "350,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + sports_Car.brand + sports_Car.model + "is " + sports_Car.price; 
}




function r_Function(name) { // broken
    return "Hello " + name;
}
document.getElementById("Example").innerHTML = r_Function("Brady");




let Car = {
    make: "Subaru ",
    model: "Forester XT ",
    year: "2018 ",
    color: "Black ",
    description : l_function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }  
};
document.getElementById("Object").innerHTML = car.description();