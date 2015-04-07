class CreateLanguageMaps < ActiveRecord::Migration
  def change
    create_table :language_maps do |t|
      t.integer :language_map_id
      t.string :language_map_type
      t.references :language, index: true
      
      t.timestamps 
    end
  end
end
