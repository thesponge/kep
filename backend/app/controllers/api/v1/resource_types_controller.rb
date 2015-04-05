class Api::V1::ResourceTypesController < ApplicationController
  def index
    render json: ResourceType.all
  end

  def show
    render json: ResourceType.find(params[:id])  
  end
end
