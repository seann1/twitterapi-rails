class PostsController < ApplicationController
  def index
  	require 'twitter'

  	@client = Twitter::REST::Client.new do |config|
	  config.consumer_key = ENV['CONSUMER_KEY']
	  config.consumer_secret = ENV['CONSUMER_SECRET']
	  config.oauth_token = ENV['ACCESS_TOKEN']
	  config.oauth_token_secret = ENV['ACCESS_SECRET']
		end

  	@tweets = @client.search("#cocacola -rt", result_type: "recent")
	end
end