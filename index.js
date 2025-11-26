var no1 = Math.floor(Math.random() * 6 + 1);
var no2 = Math.floor(Math.random() * 6 + 1);

var imagesource1 = "images/dice" + no1 + ".png";
var imagesource2 = "images/dice" + no2 + ".png";

var image1 = document
	.querySelectorAll(".img1")[0]
	.setAttribute("src", imagesource1);

var image2 = document
	.querySelectorAll(".img2")[0]
	.setAttribute("src", imagesource2);

if (no1 > no2) {
	document.querySelector("h1").innerHTML = "Player 1 Won!!";
} else if (no2 > no1) {
	document.querySelector("h1").innerHTML = "Player 2 Won!!";
} else {
	document.querySelector("h1").innerHTML = "Its a Tie!!";
}
