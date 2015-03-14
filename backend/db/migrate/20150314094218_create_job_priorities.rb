class CreateJobPriorities < ActiveRecord::Migration
  def change
    create_table :job_priorities do |t|
      t.text :priority, null: false
    end
  end
end
