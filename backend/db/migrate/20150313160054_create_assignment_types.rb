class CreateAssignmentTypes < ActiveRecord::Migration
  def change
    create_table :assignment_types do |t|
      t.string :category , null: false
      t.string :option, null: false
      
      t.timestamps null: false
    end
    
    add_index :assignment_types, [:category, :option], unique:true
  end
end
