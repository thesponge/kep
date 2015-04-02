class Api::V1::JobsController < ApplicationController
  before_action :authenticate_with_token!, only: [ :create, :update, :destroy]
  
  def index
    jobs = Job.filter(params.slice(:title, :travel, :driver_license))
    render json: jobs
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
    if job.destroy
      head 204
    else
      render json: {errors: job.errors.full_messages}, status: 422
    end
  end
    
  private 
  
  def job_params
    params.require(:job).permit(:title, :description, :travel, :driver_license, job_type_ids: [], job_compensation_ids: [], job_priority_ids: [])
  end
  
  
end
