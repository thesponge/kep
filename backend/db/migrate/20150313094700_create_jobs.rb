class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.belongs_to :user, index: true
      t.string :title
      t.text :description
      t.boolean :travel
      t.boolean :driver_license
      t.boolean :tech

      t.timestamps
    end
  end
end
