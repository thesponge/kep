class UserSessionsController < ApplicationController
  skip_before_filter :require_login, except: [:destroy]
  
  def new
    @user= User.new
  end

  def create
    if @user = login(params[:email], params[:password])
      redirect_back_or_to(:users, notice: "Login successful")
    else
      flash.now[:alert] = "Login failed"
      render action: 'new'
    end
  end

  def show
    if session[:user_id]
      user = User.find(session[:user_id])
      render json: session_payload(user)
    else
      render json: {error: "You are not logged in"}, status: 401
    end
  end

  def destroy
    session.delete(:user_id)
    render json: {}, status: 204
#    logout
    #redirect_to(:users, notice: "Logged out!")
  end

  private

  def session_payload(user)
    {
      user: { id: user.id, email: user.email },
      csrf_token: form_authenticity_token
    }
  end
end
