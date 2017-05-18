var colours = ['#DC4C46', '#672E3B', '#F3D6E4', '#005960', '#EDCDC2'];
var $quote = $('.quote');
var $author = $('.author');



$(".newquote").on("click", function() {
	var newColour = randomColour();
	$("body").css("background", newColour);
});

function randomColour() {
	var r = Math.floor(Math.random() * 255 + 1);
	var g = Math.floor(Math.random() * 255 + 1);
	var b = Math.floor(Math.random() * 255 + 1);
	var colour = "rgb(" + r + ", " + g + ", " + b + ")";
	return colour;
}