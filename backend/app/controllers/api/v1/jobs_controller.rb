class Api::V1::JobsController < ApplicationController
  before_action :authenticate_with_token!, only: [ :create, :update, :destroy]
   
  def index
    render json: Job.all
  end

  def show
    render json: Job.find(params[:id])
  end
  
  def create
    job = current_user.jobs.build(job_params)
    if job.save
      render json: job, status: 201
    else
      render json: { errors: job.errors }, status: 422
    end
  end  
  
  def update
    job = current_user.jobs.find(params[:id])
    if job.update(job_params)
      render json: job, status: 200
    else 
      render json: { errors: job.errors }, status: 422
    end
  end
  
  def destroy 
    job = current_user.jobs.find(params[:id])
    job.destroy
    head 204
  end
    
  private 
  
  def job_params
    params.require(:job).permit(:title, :description, :travel, :driver_license, :tech)
  end
  
  
end
