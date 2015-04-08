class CreateLocationMaps < ActiveRecord::Migration
  def change
    create_table :location_maps do |t|
      t.integer :location_map_id
      t.string :location_map_type
      t.references :location, index: true
      
      t.timestamps 
    end
  end
end
