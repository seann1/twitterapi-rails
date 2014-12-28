// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery.easing

//this function shuffles an array


function tweetDisplay() {


	function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


	//rotate container div for tweet
	$('.tweet_text').delay(200).transition({
  perspective: '100px',
  rotateY: '360deg'
	});

	//looping through the array of words in tweet
	for (i = 0; i < gon.text_array.length; i++) {
		$(".tweet_text").append("<div class=" + "text" + i + ">" + gon.text_array[i] + " " + "</div>");
		var targeted_div = ".text"+i;
		$(targeted_div).addClass("text");
	}

	for (i = 0; i < gon.hashtags.length; i++) {
		//loop through an array of hashtags in tweet
		//remove hash symbol from beginning of hashtag to use word in link
		var tagless = gon.hashtags[i].substr(1);
		$(".hashtags").append("<a href=https://twitter.com/search?q=%23" + tagless + " " + "target='_blank'" + " class=" + "'hashtag hashtag" + i + "'>" + gon.hashtags[i] + " " + "</a>");
	}


	var delay_number = 1000;

	//loop through each word
	for (i = 0; i < gon.text_array.length; i++) {

		//fade words in in sequence
		var targeted_span = ".text"+i;
		$(targeted_span).hide();
		$(targeted_span).fadeIn(delay_number);
		delay_number += 300;
	}

	var shuffled_array = shuffle(gon.text_array);
	function randomInt(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

		for (i = 0; i < shuffled_array.length; i++) {
			//this function generates a random number between two numbers

			var targeted_delay_span = ".text"+i;
		//animate rising and fading out at random delays
		$(targeted_delay_span).delay(randomInt(3000, 4000)).animate({
bottom: "+=300px",
opacity: 0,
}, 1000, "easeInQuint");
	}

	var hashtag_delay_number = 500;

	//loop through each hashtag
	for (i = 0; i < gon.hashtags.length; i++) {

		var targeted_hashtag_span = ".hashtag"+i;
			$(targeted_hashtag_span).hide();
			$(targeted_hashtag_span).fadeIn(hashtag_delay_number);
			hashtag_delay_number += 500;
	}

	setTimeout(function() {
		$(".text").fadeOut(1000, function() {
			$(this).delay(10000).remove();
		});
		$(".hashtag").fadeOut(1000, function() {
			$(this).remove();
	});
	}, (10 * 1000));
}

//call function on page load
$(document).ready(function () {
	tweetDisplay();

//call function on setInterval
setInterval(function() {

	tweetDisplay();
	

}, (13 * 1000));

});