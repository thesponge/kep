class Api::V1::JobTypesController < ApplicationController
  def index
    render json: JobType.all
  end

  def show
    render json: JobType.find(params[:id])  
  end
end