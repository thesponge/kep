class CreateRequestTypes < ActiveRecord::Migration
  def change
    create_table :request_types do |t|
      t.string :category, null: false
      t.string :option, null: false
      
      t.timestamps null: false
    end
    
    add_index :request_types, [:category, :option], unique: true
  end
end
