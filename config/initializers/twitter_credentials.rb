require 'twitter'

Twitter.configure do |config|
  config.consumer_key = 'your_consumer_key_here'
  config.consumer_secret = 'your_consumer_secret_here'
  config.oauth_token = 'your_oauth_token_here'
  config.oauth_token_secret = 'your_oauth_token_secret_here'
end