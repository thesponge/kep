class SessionsController < Devise::SessionsController
  # respond_to :html, :json
  # 
  # def create
  #   super do |user|
  #     if request.format.json?
  #       data = {
  #         token: user_authentication_token,
  #         user_email: user.email
  #       }
  #       render json: data, status: 201 and return
  #     end
  #   end
  # end
  def create
    respond_to do |format|
      format.html { super }
      format.json do
        self.resource = warden.authenticate!(auth_options)
        sign_in(resource_name, resource)
        data = {
          user_token: self.resource.authentication_token,
          user_email: self.resource.email
        }
        render json: data, status: 201
      end
    end
  end
end
