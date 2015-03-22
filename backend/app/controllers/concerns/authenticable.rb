module Authenticable
  #Devise methods overwrites
  
  #Identifies current user by the token from the request
  def current_user
    @current_user ||= User.find_by(auth_token: request.headers['Authorization']) 
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