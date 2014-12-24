require 'twitter'

Twitter.configure do |config|
  config.consumer_key = 'CONSUMER_KEY'
  config.consumer_secret = 'CONSUMER_SECRET'
  config.oauth_token = 'ACCESS_TOKEN'
  config.oauth_token_secret = 'ACCESS_SECRET'
end