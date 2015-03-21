class Api::V1::UsersController < ApplicationController
#  respond_to :json
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])  
  end
  

  private
  
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end