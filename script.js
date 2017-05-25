var colours = ['#DC4C46', '#672E3B', '#F3D6E4', '#005960', '#EDCDC2'];
var $quote = $('.quoteDisplay');
var $author = $('.author');


function newQuote() {
	$('body').css("background-color", randomColour());
	$.getJSON( "https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data) {
		$quote.text(data.message);
	});
}

$(document).ready(function() {
	newQuote();
});

$(".newquote").on("click", function() {
	newQuote();
});

function randomColour() {
	var r = Math.floor(Math.random() * 255 + 1);
	var g = Math.floor(Math.random() * 255 + 1);
	var b = Math.floor(Math.random() * 255 + 1);
	var colour = "rgb(" + r + ", " + g + ", " + b + ")";
	return colour;
}