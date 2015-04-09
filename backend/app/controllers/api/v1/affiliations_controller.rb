class Api::V1::AffiliationsController < ApplicationController
   before_action :authenticate_with_token!, only: [:create, :update, :destroy]
  
  def index
    render json: Affiliations.all
  end

  def show
    render json: Affiliation.find(params[:id]) 
  end
  
  def create
    aff = current_user.account.affiliations.build(affiliation_params)
    if aff.save
       render json: aff, status: 200
    else 
      render json: { errors: aff.errors }, status: 422
    end
  end
  
  protected
  
  def affiliation_params
    params.require(:affiliation).permit(:affiliation, :link, account_id: [])
  end
  
end