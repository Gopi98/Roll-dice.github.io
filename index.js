// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1 * 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;
// var change = document.querySelector(".img1").setAttribute("src", "image/dice" + randomNumber1 + ".png")

var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");



if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "winer player 1";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "winer player 2";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}