class Api::V1::MatchesController < ApplicationController
  before_action :authenticate_with_token!, only: [ :create, :destroy ]
  rescue_from ActiveRecord::RecordNotUnique, with: :not_uniq


  
  def show
    render json: Match.find(params[:id])
  end
  
  def create
    match = Match.new()
    match.j_id = params[:match][:j_id]
    match.r_id = params[:match][:r_id]
    match.assignment_owner = Assignment.find(match.j_id).user_id
    match.resource_owner = Resource.find(match.r_id).user_id
    
    if match.save
      #Sent email to both parts
      j = User.find(match.assignment_owner)
      r = User.find(match.resource_owner)
      if MatchMailer.match_email(j,'resources',match.r_id).deliver &&
        MatchMailer.match_email(r,'assignments',match.j_id).deliver
        render json: {notice: "An email has been sent"}, status: 200
      else
        render json: {notice: "An error occured at sending emails"}, status: 422
      end
    else
        render json: match.errors, status: 422
    end
  end

  private

  def match_params
    params.require(:match).permit(:r_id,:j_id,)
  end

    
  def not_uniq
    render json: {notice: "A match already exists"} , status: 304
  end
  
end
