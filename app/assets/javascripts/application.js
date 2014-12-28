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


$(document).ready(function () {
//looping through the array of words in tweet

setInterval(function() {
	for (i = 0; i < gon.text_array.length; i++) {
		$(".tweet_text").append("<div class=" + "text" + i + ">" + gon.text_array[i] + " " + "</div>");
		var targeted_div = ".text"+i;
		$(targeted_div).addClass("text");


	};

	for (i = 0; i < gon.hashtags.length; i++) {
		//loop through an array of hashtags in tweet
		//remove hash symbol from beginning of hashtag to use word in link
		var tagless = gon.hashtags[i].substr(1);
		$(".hashtags").append("<a href=https://twitter.com/search?q=%23" + tagless + " " + "target='_blank'" + " class=" + "'hashtag hashtag" + i + "'>" + gon.hashtags[i] + " " + "</a>");
	};


	var delay_number = 1000;

	//loop through each word
	for (i = 0; i < gon.text_array.length; i++) {

		//fade words in in sequence
		var targeted_span = ".text"+i;
		$(targeted_span).hide();
		$(targeted_span).fadeIn(delay_number);
		delay_number += 100;
		//create random 4 digit number to use in animate and delay
		var random_delay = Math.floor(Math.random()*6000);

		//if statement to narrow range of random_delay
		if (random_delay < 2000) {
			random_delay += 3000;
		} else if (random_delay > 4500) {
			random_delay -= 2000;
		} else {

		};
		//animate rising and fading out at random delays
		$(targeted_span).delay((random_delay + 1000)).animate({ 
	        bottom: "+=300px",
	        opacity: 0,
	    }, 1500, "easeInQuint");
	};

	var hashtag_delay_number = 500;

	//loop through each hashtag
	for (i = 0; i < gon.hashtags.length; i++) {

		var targeted_hashtag_span = ".hashtag"+i;
			$(targeted_hashtag_span).hide();
			$(targeted_hashtag_span).fadeIn(hashtag_delay_number);
			delay_number += 300;
	};

	setTimeout(function() {
		$(".text").fadeOut(1000, function() {
			$(this).remove();
		});
		$(".hashtag").fadeOut(1000, function() {
			$(this).remove();
		});
	}, (8 * 1000));

}, (13 * 1000));

});