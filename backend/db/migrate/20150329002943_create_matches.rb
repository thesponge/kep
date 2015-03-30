class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.belongs_to :user, index: true
      t.integer :request_id, null: false
      t.integer :job_id, null: false
      t.integer :request_owner, null: false
      t.integer :job_owner, null: false
      t.boolean :accepted_job
      t.boolean :accepted_request
      t.boolean :completed 
      
      t.timestamps null: false
    end
  end
end
