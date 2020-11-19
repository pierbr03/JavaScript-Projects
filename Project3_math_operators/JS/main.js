
window.alert(Math.random() * 10); //This is the 1st alert box for the random number that is displayed. This number is a random number < 10


var n = prompt("enter a number", "")
var answer = Math.pow(n, 2);
alert("The number you entered, squared or raised to the power of 2 is " + answer); //This is the second alert box that is interactive. The user enters a number to return that number raised to the second power.



var X = 5;
X++;
document.write(X); //This is just the Variable X (Which I assinged to the number 5) is incremented. Resulting in the number 6

document.write("<pre>");
var X = 5.25;
X--;
document.write(X);
document.write("</pre>");//This is just the Variable X (Which I assinged to the number 5.25) is decremented. Resulting in the number 4.25


function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x; //This function is to negate a variable. The number 10 was assigned to the varible X. This results in the -10 displayed when clicking the button
}


function modulus_Operator() {
    var simple_math = 24 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math; //This function is an example for a Modulus Operator


}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition; //this is my function for addition, when clicking the button the screen should display the addition equation 2 + 2 = 4


}

function subtraction_Function() {
    var subtraction = 10 - 3;
    document.getElementById("Math").innerHTML = "10 - 3 = " + subtraction; //this is my function for Subtraction, when clicking the button the screen should display the subtraction problem 10 - 3 = 7


}

function operation_Function() {
    var multiply = 4 * 3;
    document.getElementById("Math").innerHTML = "4 * 3  = " + multiply; //Finally my multiplication function. When clicked, should display 4 X 3 = 12


}












