class CreateIntentionMaps < ActiveRecord::Migration
  def change
    create_table :intention_maps do |t|
      t.integer :intention_map_id
      t.string :intention_map_type
      
      t.timestamps 
    end
  end
  
  add_index :intention_maps, :intention_map_id
end
