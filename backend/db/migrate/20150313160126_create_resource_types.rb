class CreateResourceTypes < ActiveRecord::Migration
  def change
    create_table :resource_types do |t|
      t.string :category, null: false
      t.string :option, null: false
      
      t.timestamps null: false
    end
    
    add_index :resource_types, [:category, :option], unique: true
  end
end
