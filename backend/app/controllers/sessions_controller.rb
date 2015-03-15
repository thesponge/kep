class SessionsController < Devise::SessionsController
  respond_to :html, :json

  def create
    respond_to do |format|
#      format.html { super }
      format.json do
        self.resource = warden.authenticate!(auth_options)
        sign_in(resource_name, resource)
        data = {
          token: user.authentication_token,
          email: user.email
        }
        render json: data, status: 201 and return
      end
    end
  end
end
