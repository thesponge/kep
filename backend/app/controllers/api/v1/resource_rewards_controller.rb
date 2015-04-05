class Api::V1::ResourceRewardsController < ApplicationController
  
  def index
    render json: ResourceReward.all
  end

  def show
    render json: ResourceReward.find(params[:id]) 
  end
  
  protected
  
  def resource_reward_params
    params.require(:resource_reward).permit(:reward, :icon, resources_attributes: [:title, :description, :travel, :driver_license])
  end
  
end
