class Api::V1::JobTypesController < ApplicationController
  def index
    render json: JobType.all
  end

  def show
    render json: JobType.find(params[:id]) 
  end
  
  protected
  
  def job_type_params
    params.require(:job_type).permit(:category, :option, jobs_attributes: [:title, :description, :travel, :driver_license])
  end
end