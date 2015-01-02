class PostsController < ApplicationController
	def index
  	require 'twitter'

  	@client = Twitter::REST::Client.new do |config|
		  config.consumer_key = ENV['CONSUMER_KEY']
		  config.consumer_secret = ENV['CONSUMER_SECRET']
		  config.access_token = ENV['ACCESS_TOKEN']
		  config.access_token_secret = ENV['ACCESS_SECRET']
		end

		#take 20 most recent tweets
		@tweet = @client.search("#cocacola", result_type: "recent", lang: "en").take(40)

		#array of tweets that arent retweets
		gon.no_retweets = []

		#look for RT and remove them
		@tweet.each do |tweet|
			if tweet.text[0..1] == "RT"
			else
				gon.no_retweets << tweet
			end
		end
		gon.no_retweets
	end
end