class CreateIntentions < ActiveRecord::Migration
  def change
    create_table :intentions do |t|
      t.string :intention, null: false
    end
  end
end
