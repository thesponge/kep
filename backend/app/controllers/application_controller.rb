class ApplicationController < ActionController::API
  include ActionController::Serialization
  include ActionController::HttpAuthentication::Token::ControllerMethods
  include ActionController::ImplicitRender
  include ActionController::StrongParameters
  include Authenticable

  before_action :authenticate_user_from_token!
  before_action :set_default_response_format

  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found
  
  def set_default_response_format
    resource.format = :json
  end
  
  def record_not_found(error)
    render :json => {:error => error.message}, :status => :not_found
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
