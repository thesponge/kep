class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :country, null: false 
      t.string :state
      t.string :city
      t.float :latitude
      t.float :longitude
    end
  end
end
