class Api::V1::MatchesController < ApplicationController
  before_action :authenticate_with_token!, only: [ :create, :destroy ]
    
  def show
    render json: Match.find(params[:id])
  end
  
  def create
    
  end
  
  def destroy 
    match = current_user.match.find(params[:id])
    if match.destroy
      head 204
    else
      render json: {errors: match.errors.full_messages}, status: 422
    end
  end

end