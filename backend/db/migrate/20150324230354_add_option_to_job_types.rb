class AddOptionToJobTypes < ActiveRecord::Migration
  def self.up
    add_column :job_types, :option, :string
    change_column :job_types, :option, :string, :null => false
  end

  def self.down
    remove_column :job_types, :option
  end
end
