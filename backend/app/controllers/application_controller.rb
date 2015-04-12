class ApplicationController < ActionController::API
  include ActionController::Serialization
  include ActionController::HttpAuthentication::Token::ControllerMethods
  include ActionController::ImplicitRender
  include ActionController::StrongParameters
  include Authenticable

  before_action :authenticate_user_from_token!
  before_action :set_default_response_format

  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  skip_before_filter :verify_authenticity_token
 
  #before_filter :cors_preflight_check
  #after_filter :cors_set_access_control_headers
  
  def set_default_response_format
    request.format = :json
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

  #def cors_set_access_control_headers
  #  headers['Access-Control-Allow-Origin'] = '*'
  #  #headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, PATCH, OPTIONS'
  #  #headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
  #  #headers['Access-Control-Max-Age'] = "1728000"
  #  #headers['Access-Control-Request-Method'] = '*'
  #end
 
  #def cors_preflight_check
  #  #headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, PATCH, OPTIONS'
  #  #response.headers['Access-Control-Allow-Headers'] = 'X-Requested-With, Content-Type, X-Prototype-Version, Token'
  #  #headers['Access-Control-Max-Age'] = '1728000'
  #  #headers['Access-Control-Request-Method'] = '*'

  #  #render :json => '', :content_type => 'application/json'
  #  headers["Access-Control-Allow-Origin"] = "*"
  #end
  
end
