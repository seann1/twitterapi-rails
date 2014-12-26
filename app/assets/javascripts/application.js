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


$(document).ready(function () {
//looping through the array of words in tweet

for (i = 0; i < gon.text_array.length; i++) {
	$(".tweet_text").append("<span class=" + "text" + i + ">" + gon.text_array[i] + " " + "</span>");

};

for (i = 0; i < gon.hashtags.length; i++) {
	var tagless = gon.hashtags[i].substr(1);
	$(".hashtags").append("<a href=https://twitter.com/search?q=%23" + tagless + " " + "target='_blank'" + " class=" + "'hashtag hashtag" + i + "'>" + gon.hashtags[i] + " " + "</a>")
};


var delay_number = 1000;
for (i = 0; i < gon.text_array.length; i++) {

	var targeted_span = ".text"+i;
	$(targeted_span).hide();
	$(targeted_span).fadeIn(delay_number);
	delay_number += 500;
};

});