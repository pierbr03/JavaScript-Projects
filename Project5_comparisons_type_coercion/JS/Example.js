
document.write("<pre>"); //This is to space True and false
document.write(15 > 7); // 15 is greater than 7 resulting in a true statment 

document.write("</pre>");


document.write(20 < 3); //20 is not less than 3 resulting false 


console.log(2 + 2); //JavaScript for console log, check dev tools to view answer

document.write("<pre>"); //This is just to add a space between the previous document write (False statement) and my coercion example
document.write("30" + 7); //This is an example of Coercion displaying 307
document.write("</pre>");


console.log(2 > 2); //This is to display false in the console


document.write("<pre>");
document.write(15 == (7 + 8)); //This is a double equal sign resulting in a true statement
document.write("</pre>");


document.write(15 == 19); //This is an example of a false statement


document.write("<pre>"); //Space from previous statment
X = 23;
Y = 23;
document.write ( X === Y); //Displays True due to Data type and value being equal 

A = "Twenty-five";
B = 23;
document.write (A === B); //Displays False due to different data type and different value

C = "23";
D = 23;
document.write (C === D); //Displays False due to different data type but the same value

E = 23;
F = 27;
document.write (E === F); //Displays False due to same data type but different value
document.write("</pre>");



document.write(25 > 20 && 10 > 3); //Displays True due to 25 being greater than 20 and 10 being grater than 3. This is an example of an Boolean And statment

document.write(25 < 20 && 10 > 3); //This would display false because 25 is not less than 20

document.write(25 < 20 || 10 > 3); //This is an Or Operator. This would return true.  25 is not greater than 20 however, 10 is greater than 3

document.write(25 < 20 && 10 < 3); //To return false on an Or operator, both need to be false.


function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; //This is part of my function to display NaN

    document.getElementById("Test2").innerHTML = isNaN('This is a string'); //Display for a true value

    document.getElementById("Test3").innerHTML = isNaN('007'); //Display False

   
}


function neginfinity_Function() {
    document.getElementById("I").innerHTML = -3E310; //This is to display -Infinity
    
}


function infinity_Function() {
    document.getElementById("I2").innerHTML = 2E310; //This is to display Infinity
    
}



function not_Function() {
    document.getElementById("Not").innerHTML = ! (45 > 5); //Is is an expamle of a Not operator. When clicked this should return False
}



function not_TFunction() {
    document.getElementById("Not_T").innerHTML = ! (3 > 5); //This is an example of a double negative, which would result in true being displayed
}