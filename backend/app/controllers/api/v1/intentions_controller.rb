class Api::V1::IntentionsController < ApplicationController
   before_action :authenticate_with_token!, only: [:create, :update,:destroy]
  
  def index
    render json: Intention.all
  end

  def show
    render json: Intention.find(params[:id]) 
  end
  
  def create
    intention = Intention.create(intention_params)
    if intention
       render json: intention, status: 200
    else 
      render json: { errors: intention.errors }, status: 422
    end
  end
  
  protected
  
  def intention_params
    params.require(:intention).permit(:intention)
  end
  
end