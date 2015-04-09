class Api::V1::SkillsController < ApplicationController
   before_action :authenticate_with_token!, only: [:create, :update]
  
  def index
    render json: Skill.all
  end

  def show
    render json: Skill.find(params[:id]) 
  end
  
  def create
    skill = current_user.account.skills.build(skill_params)
    if skill.save
       render json: skill, status: 200
    else 
      render json: { errors: skill.errors }, status: 422
    end
  end
  
  protected
  
  def skill_params
    params.require(:skill).permit(:category, :name, :icon, account_id: [])
  end
  
end