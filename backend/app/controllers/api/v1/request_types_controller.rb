class Api::V1::RequestTypesController < ApplicationController
  def index
    render json: RequestType.all
  end

  def show
    render json: RequestType.find(params[:id])  
  end
end