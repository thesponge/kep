class SessionsController < Devise::SessionsController

  def create
    super do |user|
      data = {
        token: user.authentication_token,
        email: user.email,
        id: user.id
      }
      render json: data, status: 201 and return
    end
  end
end
