source 'https://rubygems.org'

gem 'bundler'
gem 'rails', '4.2.0'
gem 'rails-api'
gem 'active_model_serializers', '0.9.3'
gem 'ffaker'
gem 'devise', '~>3.4.1'
#gem 'responders', '~> 2.0'
gem 'exception_handler'
gem 'figaro'
gem 'seed-fu', '~> 2.3'
gem 'geocoder'
#For the list of languages in language model
gem 'language_list' 
gem 'capistrano', '~> 3.4.0'
gem 'capistrano-rails', '~> 1.1.0'
gem 'capistrano-bundler'
gem 'capistrano-rbenv', "~> 2.0" 
gem 'capistrano-passenger'
gem 'capistrano-figaro-yml'
gem 'rack-cors'

group :development do
  gem 'byebug'
  gem 'sqlite3'
  gem 'pry-rails'
end


group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

group :test do
  gem "rspec-rails"
  gem "factory_girl_rails"
  gem 'capybara'
#  gem 'debugger'
  gem "shoulda-matchers"
end


gem 'pg', group: :production
gem 'rails_12factor', group: :production
