class PostsController < ApplicationController
  def index
  	require 'twitter'

  	@client = Twitter::REST::Client.new do |config|
		  config.consumer_key = ENV['CONSUMER_KEY']
		  config.consumer_secret = ENV['CONSUMER_SECRET']
		  config.oauth_token = ENV['ACCESS_TOKEN']
		  config.oauth_token_secret = ENV['ACCESS_SECRET']
		end

		@tweet = @client.search("#cocacola", result_type: "recent", lang: "en").first
		tweet = @tweet.text.split(' ')
		no_link_array = []
		hashtags = []
		
		tweet.each do |word|
			if word[0..3].downcase == "http"
				#dont push to new array
			elsif word[0] == "#"
				#push hashtags to seperate array
				hashtags << word
			else
				#push word to new array
				no_link_array << word
			end
		end

		@cleantweet = no_link_array.join(" ")
		@hashtag_string = hashtags.join(" ")

	end
end