class SorceryExternal < ActiveRecord::Migration
  def change
    create_table :authentications do |t|
      t.integer :user_id, :null => false
      t.string :provider, :uid, :null => false

      t.timestamps
    end

#    add_index :users, [:provider, :uid]
  end
end
