function vote_Function() {
    var Age, Can_vote; //these are my two variables
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to": "You can"; //If the age is less than 18 our screen should display not old enough to vote. If greater than 18 you can vote should be displayed
    document.getElementById("Vote").innerHTML = Can_vote + " vote. "; //Here is the documnet write. This will display the correct anwser on the screen, after the user inputs.


}



function Vehicle(Make, Model, Year, Color) { //In our Function Vehicle, we want properties for our object type. We would use this to define make model year and color
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
    
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Here we have multiple variables with our vehicle function assigned.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year; //Finally use document getelementbyID to display what variable Erik has.
}


function count_Function() {
    document.getElementById("Nested_Function").innerHTMl = Nested_Function();
    function Nested_Function() {
        var counter = 6;
        function Plus_one() {counter += 1;}
        Plus_one();
        return counter;

    }
}