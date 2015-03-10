class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.string :title
      t.text :description
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :submissions, :users
  end
end
