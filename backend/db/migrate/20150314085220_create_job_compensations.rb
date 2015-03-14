class CreateJobCompensations < ActiveRecord::Migration
  def change
    create_table :job_compensations do |t|
      t.string :compensation , null: false 
    end
  end
end
