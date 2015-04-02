class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.belongs_to :user, index: true
      t.integer :r_id, null: false
      t.integer :j_id, null: false
      t.integer :request_owner, null: false
      t.integer :job_owner, null: false
      t.boolean :accepted_job
      t.boolean :accepted_request
      t.boolean :completed 
      
      t.timestamps null: false
    end
    
    add_index "matches", ["j_id", "r_id"], unique:true
  end
end
