


function myFunction() {

    var x = document.getElementById("stuff"); // points to h1 by ID

    x.style.WebkitAnimation = "jackInTheBox 4s 2";
    x.style.animation = "jackInTheBox 4s 2";       // for other browsers


    x.addEventListener("webkitAnimationStart", myStartFunction);
    x.addEventListener("webkitAnimationIteration", myRepeatFunction);
    x.addEventListener("webkitAnimationEnd", myEndFunction);

    // other browsers
    x.addEventListener("animationstart", myStartFunction);
    x.addEventListener("animationiteration", myRepeatFunction);
    x.addEventListener("animationend", myEndFunction);
}

function myStartFunction() {
    this.style.color = "#9b7da3";
}

function myRepeatFunction() {
    this.style.color = "#82b1ba";
}

function myEndFunction() {
    this.style.color = "#b8b2ba";
}
