class CreateRequestTypes < ActiveRecord::Migration
  def change
    create_table :request_types do |t|
      t.string :type, null: false

      t.timestamps null: false
    end
  end
end
