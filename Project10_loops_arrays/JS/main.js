var X = "Lexus"; //setting X to the string Lexus
document.write(X); //Write or display X
{
    let X = "Nissan"; //Let statment allows to change X briefly 
    document.write("<br>" + X); //printing the "New" string assigned to X
}



function Call_Loop() { //Naming our function Call_Loop
var Digit = "";
var X = 1; //Setting our Variable X to 1
while (X < 11) { //While X is less than 11 continue the loop
    Digit += "<br>" + X;
    X++; //This adds 1 to X after each loop until it reaches false, in this case anything past 10
}

document.getElementById("Loop").innerHTML = Digit; 

}


function str_Length_Function() { //This is our String length function
    var str = "Nissan Skyline R32 GTR"; //Using str statment will count the number of characters in the string
    var n = str.length;
    document.getElementById("length").innerHTML = n; //In the string assosiated with Nissan Skyline, there are 22 characters which is what is displayed when the button is pressed
}


var Instruments = ["Guitar", "Drums", "Bass", "Piano", "Trumpet"]; //Setting Instruments equal to all the instruments listed
var Content = "";
var Y;
function for_Loop() { //Creating the for loop
    for (Y = 0; Y < Instruments.length; Y++) { 
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //This will display the list of instruments in our for loop 
}



function array_Function() { //Naming our array function
    var guitars = [];
    guitars[0] = "Chapman"; //Assigning a guitar brand to a number in our array
    guitars[1] = "PRS";
    guitars[2] = "Fender";
    guitars[3] = "Gibson";
    guitars[4] = "ESP";
    guitars[5] = "Ibanez";
    document.getElementById("Array").innerHTML = "My favorite guitars to play are " +
        guitars[4] + " guitars.";
}

function car_Function() { //Using the constant statement
    const sports_Car = {type: "car", brand:"Lexus", model:"LFA", color: "black"}; //Here we are assinging a string to each object found with in what we named sports car
    sports_Car.color = "purple";
    sports_Car.price = "350,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + sports_Car.brand + sports_Car.model + "is " + sports_Car.price; //This will display the brand model and price in one line
}




function r_Function(name) { //This is my example using a return statment, in the HTML file we have the Name assinged to Brady, This will display Hello Brady
    return "Hello " + name;
}



function l_function() { //Example of a let function
let Car = {
    make: "Subaru ", //Assigning the make of the car
    model: "Forester XT ", //Assigning the model of the car
    year: "2018 ", //Assigning the year of the car
    color: "Black ", //Assigning the color of the car
    description : function() { //
        return "The car is a " + this.year + this.color + this.make + this.model; //This will display the year color make and model of the car
    }  
};
document.getElementById("Object").innerHTML = Car.description();
}