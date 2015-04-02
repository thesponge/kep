class Api::V1::UsersController < ApplicationController
  before_action :authenticate_with_token!, only: [:update, :destroy]

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])  
  end
  
  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: 201
    else
      render json: { errors: user.errors }, status: 422
    end
  end
  
  def update
    user = current_user
    
    if user.update(user_params)
      render json: user, status: 200
    else
      render json: { errors: user.errors }, status: 422
    end
  end
  
  def destroy
    current_user.destroy
    head 204
  end


  private
  
  def  user_params
    params.require(:user).permit(:email, :password, :password_confirmation, account_attributes: [:bio, :avatar, :url])
  end
end