const colors = [
	"green",
	"red",
	"black",
	"blue",
	"brown",
	"gray",
	"orange",
	"pink",
	"purple",
	"yellow",
	"turquoise",
	"lavender",
	"magenta",
	"cyan",
	"teal",
	"plum",
	"tan",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	//get random number(index) from colors array
	const randomNumber = getRandomNumber();
	console.log(randomNumber);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
	color.style.color = colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
