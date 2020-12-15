function Food_Function() {
    var Food_Output;
    var Food = document.getElementById("Food_Input").value;
    var Food_String = " is a great choice!";
    switch(Food) {
        case "Thai Food":
            Food_Output = "Thai Food" + Food_String;
        break;
        case "Mexican Food":
            Food_Output = "Mexican Food" + Food_String;
        break;
        case "Italian Food":
            Food_Output = "Italian Food" + Food_String;
        break;
        case "American Food":
            Food_Output = "American Food" + Food_String;
        break;
        case "Asian Food":
            Food_Output = "Asian Food" + Food_String;
        break;
        default:
        Food_Output = "Please enter a choice exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}


function Hello_World() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}




var C = document.getElementById("myCanvas");
var ctx = C.getContext("2d");
//Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
//Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(25,25,150,100);








