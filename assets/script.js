const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.getElementsByClassName("arrow_left")[0];
const arrow_right = document.getElementsByClassName("arrow_right")[0];
const dots = document.getElementsByClassName("dots")[0];

arrow_left.addEventListener("click", () => {
	console.log("Fléche gauche cliqué");
});

arrow_right.addEventListener("click", () => {
	console.log("Flèche droite cliqué");
});

slides.forEach(() => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);
})