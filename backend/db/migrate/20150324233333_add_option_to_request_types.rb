class AddOptionToRequestTypes < ActiveRecord::Migration
  def self.up
    add_column :request_types, :option, :string
    change_column :request_types, :option, :string, :null => false
  end

  def self.down
    remove_column :request_types, :option
  end
end
