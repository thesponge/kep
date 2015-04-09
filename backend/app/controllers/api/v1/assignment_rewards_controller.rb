class Api::V1::AssignmentRewardsController < ApplicationController
  
  def index
    render json: AssignmentReward.all
  end

  def show
    render json: AssignmentReward.find(params[:id]) 
  end
  
  protected
  
  def assignment_reward_params
    params.require(:assignment_reward).permit(:reward, :icon, assignments_ids:[])
  end
  
end
