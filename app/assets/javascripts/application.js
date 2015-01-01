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


//shuffle array of tweet objects

function tweetDisplay(array) {

//this function shuffles an array, I use it to shuffle indexes to make words of the tweet float up in random sequence
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

var current_tweet = array[Math.floor(Math.random()*array.length)];
current_tweet = current_tweet.text.split(" ");
var hashtags = [];
var no_link_array = [];

//looping through each word of current tweet
for (i = 0; i < current_tweet.length; i++) {
	debugger
	if (current_tweet[i].substring(0, 5) == "http:" || current_tweet[i] === "...:" || current_tweet[i] === "&amp;") {
		current_tweet[i] = "";
	} 
	else if (current_tweet[i] === "#") {
		no_link_array.push("<span class='no-font'>#</span>");
	}
	else if (current_tweet[i].substring(1).toLowerCase() === "cocacola" || current_tweet[i].toLowerCase() === "cocacola" || current_tweet[i].toLowerCase() === "coca-cola" || current_tweet[i].toLowerCase() === "coca cola") {
		//put the word coca cola in coca cola font
		current_tweet[i] = "<a href='https://twitter.com/search?q=%23cocacola' target='_blank' class='nostyle'>" + "<span class='no-font-cocacola'>#</span><span class='coca-cola-logo'>CocaCola</span></a>";
		no_link_array.push(current_tweet[i]);
		hashtags.push("CocaCola");
	}
	else if (current_tweet[i].substring(0,1) === "#") {
		//create span with different font in css so hashtags appear as hashtags
		current_tweet_no_hash = "<a href=https://twitter.com/search?q=%23" + current_tweet[i].substring(1, current_tweet[i].length) + " " + "target='_blank'" + " class=" + "'hashtag hashtag" + i + "'>" + "<span class='no-font-hash'>#</span>" + current_tweet[i].substring(1, current_tweet.length) + " " + "</a>"
		hashtags.push(current_tweet[i].substring(1, current_tweet[i].length));
		no_link_array.push(current_tweet_no_hash);
	} else {
		no_link_array.push(current_tweet[i]);
	}
}



	//rotate container div for tweet
	$('.tweet_text').transition({
  perspective: '700px',
  rotateY: '5deg',
  rotateX: '10deg',
  rotateZ: '30deg'
	}, 6000, 'easeOutQuart').transition({
  perspective: '700px',
  rotateY: '-10deg',
  rotateX: '-10deg',
  rotateZ: '-20deg'
	}, 3000, 'easeInQuart');


	//looping through the array of words in tweet and appending divs containing each word to index page
	//it changes classes on the parent div based on how many words are in the tweet
	for (i = 0; i < no_link_array.length; i++) {
		if (no_link_array.length < 8) {
			$(".tweet_text").append("<div class=" + "text" + i + ">" + no_link_array[i] + " " + "</div>");
			var targeted_div = ".text"+i;
			$(targeted_div).addClass("text");
		} else if (no_link_array.length < 6) {
			$(".tweet_text").addClass("large_tweet_text").removeClass("tweet_text");
			$(".large_tweet_text").append("<div class=" + "text" + i + ">" + no_link_array[i] + " " + "</div>");
		  var targeted_div = ".text"+i;
			$(targeted_div).addClass("text");
		}
		else {
			//if the tweet is longer than 12 words remove tweet_text class and add small_tweet_text class	
			$(".tweet_text").addClass("small_tweet_text").removeClass("tweet_text");
			$(".small_tweet_text").append("<div class=" + "text" + i + ">" + no_link_array[i] + " " + "</div>");
		  var targeted_div = ".text"+i;
			$(targeted_div).addClass("text");
		}
	}


	var delay_number = 1000;

	var indexes_array = [];

	//loop through each word
	for (i = 0; i < no_link_array.length; i++) {

		//fade words in sequence
		var targeted_span = ".text"+i;
		$(targeted_span).hide();
		$(targeted_span).fadeIn(delay_number);
		delay_number += 300;
		indexes_array.push(i);
	}

	var shuffled_array = shuffle(indexes_array);
	
	function randomInt(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

		for (i = 0; i < no_link_array.length; i++) {
			//this function generates a random number between two numbers

			var targeted_delay_span = ".text" + shuffled_array[i];
		//animate rising and fading out at random delays
		$(targeted_delay_span).delay(randomInt(3000, 4000)).animate({
bottom: "+=300px",
opacity: 0,
}, 1000, "easeInQuint");
	}

	var hashtag_delay_number = 500;

	//loop through each hashtag
	for (i = 0; i < hashtags.length; i++) {

		var targeted_hashtag_span = ".hashtag"+i;
			$(targeted_hashtag_span).hide();
			$(targeted_hashtag_span).fadeIn(hashtag_delay_number);
			hashtag_delay_number += 500;
	}

	setTimeout(function() {
		$(".text").fadeOut(1000, function() {
			$(this).delay(13000).remove();
		});
	}, (13 * 1000));
}

//call function on page load
$(document).ready(function () {
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

var shuffled_tweets = shuffle(gon.no_retweets);

	tweetDisplay(shuffled_tweets);

//call function on setInterval
setInterval(function() {
	$(".small_tweet_text").addClass("tweet_text").removeClass("small_tweet_text");
	$(".large_tweet_text").addClass("tweet_text").removeClass("large_tweet_text");

	tweetDisplay(shuffled_tweets);
	

}, (15 * 1000));

});