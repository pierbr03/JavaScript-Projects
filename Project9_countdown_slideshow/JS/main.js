function countdown() {
    var seconds = document.getElementById("seconds").nodeValue; //Assigning the variable 

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) { //This is our if statment, if variable seconds reaches -1 display the alert below
        alert("Time is up!"); //This is the alert box that displays
    }

        }
    tick();
}



var slideIndex = 1; //Assigning the variable
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n); //This is for moving the picture forward to the next slide
  }

function currentSlide(n) {
  showSlides(slideIndex = n); //This function is for which of the current slide is displayed 
}

function showSlides(n) {
  var i; //assgining a variable
  var slides = document.getElementsByClassName("mySlides"); //This is assigning the variable slides equal to the class myslides
  var dots = document.getElementsByClassName("dot"); //This is assigning the variable dots to the class dot
  if (n > slides.length) {slideIndex = 1;}    //This is an if statement for when we reach the last slide, to go back to the first
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) { //This for statment is for all slides to display none
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); //This is replacing the active classs from our dot class
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}