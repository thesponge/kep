class ApplicationController < ActionController::API
  include ActionController::Serialization
  include ActionController::HttpAuthentication::Token::ControllerMethods
  include ActionController::ImplicitRender
  include ActionController::StrongParameters
  include Authenticable
    
  respond_to :json
  before_filter :authenticate_user_from_token!

#  # Enter the normal Devise authentication path,
#  # using the token authenticated user if available
#  before_filter :authenticate_user!

  def authenticate_user_from_token!
    authenticate_with_http_token do |token, options|
      user_email = options[:email].presence
      user = user_email && User.find_by_email(user_email)

      if user && Devise.secure_compare(user.authentication_token, token)
        sign_in user, store: false
      else
        render json: { message: 'Invalid authorization.' }, status: 400
      end
    end
  end
  
end
