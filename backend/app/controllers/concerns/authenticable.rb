module Authenticable
  include ActionController::HttpAuthentication::Token

  #Devise methods overwrites
  
  #Identifies current user by the token from the resource
  def current_user
    @current_user ||= User.find_by(authentication_token: token_and_options(resource)) 
  end
  
  #Prevents unauthorized users from making user  specific actions i.e. edit & friends 
  def authenticate_with_token!
    render json: { errors: 'Not authenticated'},
      status: :unauthorized unless user_signed_in?
  end
  
  def user_signed_in?
    current_user.present?
  end
end
