var X = 25; //This is an example of a global variable. Both functions display properly when run
function add_numbers_1() {
    document.write(10 + X + "<br>");
}
function add_numbers_2(){
    document.write(X + 100);
}




function add_numbers_3() {
    var Y = 10; //Becuase this is a local example this is only displaying for function add_numbers 3
    document.write(10 + Y + "<br>");
}
function add_numbers_4(){
    console.log(Y + 100);
}



function conditional_Function() { //This Function will display either Good day or Good evening
    var hour = new Date().getHours();
    var greeting;
    if (hour < 18) { // Our if statement determines what is displayed. If the hour or time is less than 18 the display will be good day
        greeting = "Good day";
    }   else { //Otherwise if the hour or time is greater than 18 Good evening will be displayed
        greeting = "Good evening";
    }
    document.getElementById("if_then").innerHTML = greeting;
}

function fav_Icecream() {
    var Icecream
    var flavor = Vanilla
    var flavor_2 = Chocolate
    if (Icecream) {
        flavor = "Vanilla is best!";
    }   else {
        flavor_2 = "Chocolate is pretty good, but Vanilla is better";
        document.getElementById(Icecream).innerHTML = Icecream
    }
}



function Time_function() { //This function is used to display the time 
    var Time = new Date().getHours(); //Here we set our variables
    var Reply;
    if (Time < 12 == Time > 0) { //If the time is less than 12 the screen will display its morning time
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) { //If the time is greater than 12 but less than 18 the screen will display it is afternoon
        Reply = "It is the afternoon.";
    }
    else { //Other wise it is evening time will be displayed
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //This is the document getelementbyid to display the correct Reply
}