class Api::V1::MatchesController < ApplicationController
  before_action :authenticate_with_token!, only: [ :create, :destroy ]
  rescue_from ActiveRecord::RecordNotUnique, with: :not_uniq
  
  def show
    render json: Match.find(params[:id])
  end
  
  def create
    match = Match.new()
    match.job_id = params[:job_id]
    match.request_id = params[:request_id]
    match.job_owner = Job.find(match.job_id).user_id
    match.request_owner = Request.find(match.request_id).user_id
    
    if match.save
      #Sent email to both parts
      j = User.find(match.job_owner)
      r = User.find(match.request_owner)
      if MatchMailer.match_email(j,'requests',match.request_id).deliver &&
        MatchMailer.match_email(r,'jobs',match.job_id).deliver
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
    params.require(:match).permit(:job_id, :request_id)
  end

    
  def not_uniq
    render json: {notice: "A match already exists"} , status: 304
  end
end