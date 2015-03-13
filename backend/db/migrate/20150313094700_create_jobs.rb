class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.boolean :travel
      t.boolean :driver_license
      t.boolean :tech
      t.references :user, index: true

      t.timestamps
    end
  end
end
