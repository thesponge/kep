class Api::V1::JobCompensationsController < ApplicationController
  
  def index
    render json: JobCompensation.all
  end

  def show
    render json: JobCompensation.find(params[:id]) 
  end
  
  protected
  
  def job_compensation_params
    params.require(:job_compensation).permit(:compensation, jobs_attributes: [:title, :description, :travel, :driver_license])
  end
  
end