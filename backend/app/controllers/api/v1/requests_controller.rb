class Api::V1::RequestsController < ApplicationController
  before_action :authenticate_with_token!, only: [ :create, :update, :destroy]
   
  def index
    render json: Request.all
  end

  def show
    render json: Request.find(params[:id])
  end
  
  def create
    request = current_user.requests.build(request_params)
    if request.save
      render json: request, status: 201
    else
      render json: { errors: request.errors }, status: 422
    end
  end  
  
  def update
    request = current_user.requests.find(params[:id])
    if request.update(request_params)
      render json: request, status: 200
    else 
      render json: { errors: request.errors }, status: 422
    end
  end
  
  def destroy 
    request = current_user.requests.find(params[:id])
    if request.destroy
      head 204
    else
      render json: {errors: request.errors.full_messages}, status: 422
    end
  end
    
  private 
  
  def request_params
    params.require(:request).permit(:title, :description, :travel, :driver_license,request_type_ids: [], request_compensation_ids: [], request_priority_ids: [])
  end
  
  
end
