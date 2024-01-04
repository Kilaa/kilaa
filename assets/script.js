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

let compteur = 0;

const dotscontainer = document.getElementById('dots');
slides.forEach(element => {
	var dot = document.createElement('div');
	dot.setAttribute('class','dot');
	dotscontainer.appendChild(dot);	
});


// Sélectionnez flèches
const arrowLeft = document.querySelector('#arrow_left');
const arrowRight = document.querySelector('#arrow_right');

// event listener flèche gauche
arrowLeft.addEventListener('click', function() {
    console.log('Clic sur la flèche gauche');
    compteur -= 1;
	if(0>compteur){compteur=slides.length-1;}
	console.log(compteur)
});

// event listener flèche droite
arrowRight.addEventListener('click', function() {
    console.log('Clic sur la flèche droite');
    compteur += 1;
	if(slides.length-1 < compteur){compteur=0;}
	console.log(compteur)
});

