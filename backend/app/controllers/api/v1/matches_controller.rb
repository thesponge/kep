class Api::V1::MatchesController < ApplicationController
  before_action :authenticate_with_token!, only: [ :create, :destroy ]
    
  def index
    
  end
  
  def show
    render json: Match.find(params[:id])
  end
  
  def create
    match = Match.new()
    match.job_owner = Job.find(params[:job_id]).user_id
    match.request_owner = Request.find(params[:request_id]).user_id
    match.job_id = params[:job_id]
    match.request_id = params[:request_id]
    if match.save
      #Sent email to both parts
      j = User.find(match.job_owner)
      r = User.find(match.request_owner)
      if MatchMailer.match_email(j).deliver &&
            MatchMailer.match_email(r).deliver
        render json: {notice: "An email has been sent"}, status: 200
      end
    else
      render json: match.errors, status: 422
    end
  end
  
  def destroy 
    match = current_user.match.find(params[:id])
    if match.destroy
      head 204
    else
      render json: {errors: match.errors.full_messages}, status: 422
    end
  end

  private
  
  def match_params
    params.require(:match).permit(:job_id, :request_id)
  end
end