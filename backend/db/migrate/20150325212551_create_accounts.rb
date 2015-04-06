class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.references :user
      t.text :bio
      t.string :avatar
      t.string :url
      t.boolean :available
    end
  end
end
