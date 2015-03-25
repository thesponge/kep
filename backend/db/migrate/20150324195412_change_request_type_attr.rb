class ChangeRequestTypeAttr < ActiveRecord::Migration
  def change
    rename_column :request_types, :type, :category
  end
end
