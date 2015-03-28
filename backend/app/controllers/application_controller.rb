class ApplicationController < ActionController::API
  include ActionController::Serialization
  include ActionController::HttpAuthentication::Token::ControllerMethods
#  include ActionController::RespondWith
#  include ActionController::MimeResponds::ClassMethods
  include ActionController::ImplicitRender
  include Authenticable
  
  before_action :authenticate_user_from_token!
  before_action :set_default_response_format

  respond_to :json
  
  def set_default_response_format
    request.format = :json
  end

  private

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
