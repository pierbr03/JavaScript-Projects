function Sentence() {
    var part_1 = "I hope ";
    var part_2 = "some day I will ";
    var part_3 = "own a GTR. ";
    var part_4 = "So I can drive around Portland";
    var full_Sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = full_Sentence;

}



function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}


function case_Function() {
    var str = "uppercase";
    var res = str.toUpperCase();
    document.getElementById("Upper").innerHTML = res;
}



function SaS_Function (){
    var str = "Nissan-Skyline";
    var n = str.search("Nissan-Skyline");
    document.getElementById("Search").innerHTML = n;
}


function string_Method() {
    var X= 76;
    document.getElementById("Numbers").innerHTML = X.toString();
}


function precision_Method() {
    var X = 12.54865156687654316516;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}


function fixednumber_Method() {
    var num = 23.424897651;
    var n = num.toFixed(3);
    document.getElementById("Fixed").innerHTML = n;
}


function valueofString_Function() {
    var str = "Nissan Skyline";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
}


