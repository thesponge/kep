class ChangeJobTypeAttr < ActiveRecord::Migration
  def change
    rename_column :job_types, :type, :category
  end
end
