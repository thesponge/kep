class Api::V1::ResourcesController < ApplicationController
  before_action :authenticate_with_token!, only: [ :create, :update, :destroy]
  before_filter :add_cors_to_json

   
  def index
    render json: Resource.all
  end

  def show
    render json: Resource.find(params[:id])
  end
  
  def create
    resource = current_user.resources.build(resource_params)
    if resource.save
      render json: resource, status: 201
    else
      render json: { errors: resource.errors }, status: 422
    end
  end  
  
  def update
    resource = current_user.resources.find(params[:id])
    if resource.update(resource_params)
      render json: resource, status: 200
    else 
      render json: { errors: resource.errors }, status: 422
    end
  end
  
  def destroy 
    resource = current_user.resources.find(params[:id])
    if resource.destroy
      head 204
    else
      render json: {errors: resource.errors.full_messages}, status: 422
    end
  end
    
  private 
  
  def resource_params
    params.require(:resource).permit(:title, :description, :travel, :driver_license,resource_intention_ids: [], resource_priority_ids: [])
  end

  protected def add_cors_to_json
    if request.format == "application/json"
      # "*" to allow for any domain, or specify certain domains
      response.headers["Access-Control-Allow-Origin"] = "*"
    end
  end

  
  
end
