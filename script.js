


function newQuote() {
	$('body').css("background-color", randomColour());
	$.getJSON( "https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data) {
		$('.quoteDisplay').text(data.message);
	});
}

$(document).ready(function() {
	newQuote();
});

$('.newquote').on("click", function() {
	newQuote();
});

$('.fa-twitter-square').on("click", function() {
	var twitUrl = "https://twitter.com/intent/tweet?text=" + $('.quoteDisplay').text() + " - Donald Trump";
	console.log($('.fa-twitter-square').attr("href", twitUrl));
});

// <a class="twitter-share-button"
//   href="https://twitter.com/intent/tweet?text=Hello%20world">
// Tweet</a>

function randomColour() {
	var r = Math.floor(Math.random() * 255 + 1);
	var g = Math.floor(Math.random() * 255 + 1);
	var b = Math.floor(Math.random() * 255 + 1);
	var colour = "rgb(" + r + ", " + g + ", " + b + ")";
	return colour;
}