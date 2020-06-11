// scripts for the "back to top" button  
//Get the button:
myButton = document.getElementById("top-btn");

//When user scrolls down 20px from the top of the page, show the button
window.onscroll = function(){
	scrollFunction()
};

function scrollFunction() {
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

//When user clicks on the button, scroll to the top of the document
function topFunction(){
	document.body.scrollTop = 0; //for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}


//scripts for the button controls on mobile screens
var slideIndex = 1;
showSlides(slideIndex);

// image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementByClassName("column");
	var dots = document.getElementByClassName("dot");

	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}

		for(i = 0; i < slides.length; i++){
			slides[i].style.display = "none"
		}
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(" active", " ");
		}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";	
}
// script end of button controls on mobile screens

