class Api::V1::AccountsController < ApplicationController
  before_action :authenticate_with_token!, only: [ :update]

  def show
    render json: Account.find(params[:user_id])
  end
  
  def update
    account = current_user.account
    if account.update(account_params)
      render json: account, status: 200
    else 
      render json: { errors: account.errors }, status: 422
    end
  end
  
  
  def  account_params
    params.require(:account).permit(:bio, :avatar, :url, :available, :display_name, user_attributes: [:id], intention_ids: [], affiliation_ids: [], location_ids: [], language_ids: [], skill_ids: []) 
  end  
  
end