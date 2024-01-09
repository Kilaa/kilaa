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
	if 	(compteur < 0) 
		{compteur = slides.length - 1;}
		updateBanner(); // Appel de la fonction pour mettre à jour le banner après le changement de slide
});

// Sélectionnez les bullet points
const dotsContainer = document.getElementById('dots');
const dots = document.querySelectorAll('.dot');


// event listener flèche droite
arrowRight.addEventListener('click', function() {
    console.log('Clic sur la flèche droite');
    compteur += 1;
	 // Si on est à la dernière image, passe à la première
	 if (compteur >= slides.length)
	  	{compteur = 0;}

		updateBanner(); // Appel de la fonction pour mettre à jour le banner après le changement de slide
});

// Fonction pour mettre à jour les bullet points
function updateBullets() {
    dots.forEach((dot, index) => {
        if (index === compteur) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Fonction pour mettre à jour le banner (image, tagLine, bullet points)
function updateBanner() {
    const bannerImage = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');
	

// Assurez que l'index est valide
    if (compteur < 0) {
        compteur = slides.length - 1;
    } else if (compteur >= slides.length) {
        compteur = 0;
    }

// Pour mettre à jour l'image et le texte
    bannerImage.src = `./assets/images/slideshow/${slides[compteur].image}`;
    tagLine.innerHTML = slides[compteur].tagLine;

// Mettre à jour les bullet points
    updateBullets();
}

// Metttre à jour le banner lors du chargement initial
updateBanner();

