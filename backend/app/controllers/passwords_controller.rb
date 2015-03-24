class PasswordsController < Devise::PasswordsController
  skip_before_filter :verify_authenticity_token, :if => Proc.new { |c| c.request.format == 'application/json' }
#  respond_to :json

  def new
  end

  def create
    user = User.send_reset_password_instructions(user_params)
    if successfully_sent?(user)
      render status: 200, json: {success: true}
    else
      render status: 422, json {errors: user.errors.full_messages }
    end
  end
  
  def  user_params
    params.require(:user).permit(:email)
  end
  
end
