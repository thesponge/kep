class CreateAssignments < ActiveRecord::Migration
  def change
    create_table :assignments do |t|
      t.belongs_to :user, index: true
      t.string :title, null: false
      t.text :description, null: false
      t.boolean :travel
      t.boolean :driver_license
      t.datetime :start_date
      t.datetime :end_date
      
      t.timestamps
    end
  end
end
