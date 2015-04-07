class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :category, null: false
      t.string :name, null: false
    end
  end
end
