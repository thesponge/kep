class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.belongs_to :user, index: true
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
