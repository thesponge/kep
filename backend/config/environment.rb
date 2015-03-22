# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
MyBackend::Application.initialize!

MyBackend::Application.configure do

  config.action_mailer.raise_delivery_errors = true
  config.action_mailer.default_url_options = { :host => 'localhost:3000' }
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
    address: "kep@thesponge.eu",
    port: "25",
    domain: "mail.thesponge.eu",
    authentication: "plain",
    enable_starttls_auto: true,
    user_name: "kep@thesponge.eu",
    password: ""
  }
end
