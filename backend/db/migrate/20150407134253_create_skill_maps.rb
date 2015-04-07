class CreateSkillMaps < ActiveRecord::Migration
  def change
    create_table :skill_maps do |t|
      t.integer :skill_map_id
      t.string :skill_map_type
      t.references :skill, index: true
      t.string :proof
      
      t.timestamps 
    end
  end
end
