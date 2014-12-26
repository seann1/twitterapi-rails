class PostsController < ApplicationController
  def index
  	require 'twitter'

  	@client = Twitter::REST::Client.new do |config|
		  config.consumer_key = ENV['CONSUMER_KEY']
		  config.consumer_secret = ENV['CONSUMER_SECRET']
		  config.oauth_token = ENV['ACCESS_TOKEN']
		  config.oauth_token_secret = ENV['ACCESS_SECRET']
		end

		#take 20 most recent tweets
		@tweet = @client.search("#cocacola", result_type: "recent", lang: "en").take(20)

		#array of tweets that arent retweets
		no_retweets = []

		#look for RT and remove them
		@tweet.each do |tweet|
			if tweet.text[0..1] == "RT"
			else
				no_retweets << tweet
			end
		end

		#no_retweets is an array of tweet objects with RT (retweets) removed


		tweet = no_retweets[8].text.split(' ')
		no_link_array = []
		hashtags = []

		tweet.each do |word|
			if word[0..3].downcase == "http"
				#dont push to new array
			elsif word == "&amp;"
				#dont push to new array

			elsif word[0] == "#"
				#push hashtags to seperate array
				hashtags << word
				no_link_array << word
			else
				#push word to new array
				no_link_array << word
			end
		end

		@cleantweet = no_link_array.join(" ")
		@hashtag_string = hashtags.join(" ")
		gon.text_array = no_link_array
		gon.hashtags = hashtags

	end
end