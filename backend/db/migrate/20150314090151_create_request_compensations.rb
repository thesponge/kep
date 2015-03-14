class CreateRequestCompensations < ActiveRecord::Migration
  def change
    create_table :request_compensations do |t|
      t.string :compensation, null: false
    end
  end
end
