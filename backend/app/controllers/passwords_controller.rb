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

end
