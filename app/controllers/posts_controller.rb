class PostsController < ApplicationController
  def index
  	require 'twitter'

  	@client = Twitter::REST::Client.new do |config|
	  config.consumer_key = 'CONSUMER_KEY'
	  config.consumer_secret = 'CONSUMER_SECRET'
	  config.oauth_token = 'ACCESS_TOKEN'
	  config.oauth_token_secret = 'ACCESS_SECRET'
		end

  	@tweets = @client.user_timeline(783214)
	end
end