class ConfirmationsController < Devise::ConfirmationsController

  def show
    self.resource = resource_class.confirm_by_token(params[:confirmation_token])

    if resource.errors.empty?
      render status: 200, json: { success: true }
    else
      render status: 422, json: { errors: resource.errors.full_messages }
    end
  end

end
