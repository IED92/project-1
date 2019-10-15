

document.addEventListener("DOMContentLoaded", function() {

	// Flickity Slider JS

	const elem = document.querySelector('#product-slider');
	const flkty = new Flickity( elem, {
  		// options
  	cellAlign: 'left',
  	wrapAround: true,
  	freeScroll: true
  	
});

document.getElementById("sign-up-form").addEventListener("submit", function() {
	alert("Thank you for subscribing!");
});

}); // end of document