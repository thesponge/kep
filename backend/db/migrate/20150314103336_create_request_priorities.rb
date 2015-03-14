class CreateRequestPriorities < ActiveRecord::Migration
  def change
    create_table :request_priorities do |t|
      t.string :priority, null: false
    end
  end
end
