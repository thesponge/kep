class Api::V1::JobsController < ApplicationController
  def index
    render json: Job.all
  end

  def show
    render json: Job.find(params[:id])  
  end
end