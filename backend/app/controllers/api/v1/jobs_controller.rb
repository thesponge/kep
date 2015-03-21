class Api::V1::JobsController < ApplicationController
  def index
    render json: Job.all
  end

  def show
    render json: Job.find(params[:id])
  end
  
  def create
    job = Job.new(job_params)
    if job.save
      render json: job, status: 201
    else
      render json: { errors: job.errors }, status: 422
    end
  end  
  
  def update
    job = Job.find(params[:id])
    if job.update(product_params)
      render json: product, status: 200, location: [:api, product]
    else 
      render json: { errors: product.errors }, status: 422
    end
  end
  
  def destroy 
    job = Job.find(params[:id])
    job.destroy
    head 204
  end
    
  private 
  
  def job_params
    params.require(:job).permit(:title, :description, :travel, :diver_license, :tech)
  end
  
  
end
