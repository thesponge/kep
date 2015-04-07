class Api::V1::ResourcesController < ApplicationController
  before_action :authenticate_with_token!, only: [ :update]

  def show
    render json: Account.find(params[:user_id])
  end
  
  def update
    account = current_user.accounts.find
    if
  end
  
  
  
  def  account_params
    params.require(:account).permit(:bio, :avatar, :url, user_attributes: [:id])
  end
  
end