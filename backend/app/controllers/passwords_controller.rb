class PasswordsController < Devise::PasswordsController
  
  def create
    super do
      if successfully_sent?(resource)
        render status: 200, json: { success: true }
      else
        render status: 422, json: { errors: resource.errors.full_messages }
      end
      return
    end
  end

  def update
    self.resource = resource_class.reset_password_by_token(resource_params)
    if resource.errors.empty?
      render status: 200, json: { success: true }
    else
      render status: 422, json: { errors: resource.errors.full_messages }
    end
  end

end
