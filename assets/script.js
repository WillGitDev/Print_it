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
const dotsList = [];
const banner_img = document.getElementsByClassName("banner-img")[0];
const tagLine = document.querySelector("#banner p");
const pathImg = "assets/images/slideshow/";
let currentIndex = 0;


arrow_left.addEventListener("click", () => {
	currentIndex = (currentIndex <= 0) ? slides.length - 1 : currentIndex - 1;
	banner_img.setAttribute("src", `${pathImg}${slides[currentIndex].image}`);
	tagLine.innerHTML = slides[currentIndex].tagLine;
	dotSelected(currentIndex);
});

arrow_right.addEventListener("click", () => {
	currentIndex = (currentIndex >= slides.length -1) ? 0 : currentIndex + 1;
	banner_img.setAttribute("src", `${pathImg}${slides[currentIndex].image}`);
	tagLine.innerHTML = slides[currentIndex].tagLine;
	dotSelected(currentIndex);
});

slides.forEach((_, index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if(index === 0){dot.classList.add("dot_selected")};
	dots.appendChild(dot);
	dotsList.push(dot);
});

/**
 * Permet d'attribuer la classe dot_selected sur
 * le bullet point en fonction de l'image affichée dans le
 * carrousel
 * @param {number} index Index de l'image en cours.
 */
function dotSelected(index){
	dotsList.forEach((dot) => {
		dot.classList.remove("dot_selected");
	});
	dotsList[index].classList.add("dot_selected");
};