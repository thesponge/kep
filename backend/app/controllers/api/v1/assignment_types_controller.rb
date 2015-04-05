class Api::V1::AssignmentTypesController < ApplicationController
  def index
    render json: AssignmentType.all
  end

  def show
    render json: AssignmentType.find(params[:id]) 
  end
  
  protected
  
  def assignment_type_params
    params.require(:assignment_type).permit(:category, :option, assignments_attributes: [:title, :description, :travel, :driver_license])
  end
end
