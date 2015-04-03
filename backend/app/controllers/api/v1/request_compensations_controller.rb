class Api::V1::RequestCompensationsController < ApplicationController
  
  def index
    render json: RequestCompensation.all
  end

  def show
    render json: RequestCompensation.find(params[:id]) 
  end
  
  protected
  
  def request_compensation_params
    params.require(:request_compensation).permit(:compensation, :icon, requests_attributes: [:title, :description, :travel, :driver_license])
  end
  
end
