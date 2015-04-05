class CreateResourcePriorities < ActiveRecord::Migration
  def change
    create_table :resource_priorities do |t|
      t.string :priority, null: false
    end
  end
end
