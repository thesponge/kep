class CreateJobsJobTypes < ActiveRecord::Migration
  def change
    create_table :jobs_job_types do |t|
      t.belongs_to :job, index: true
      t.integer :job_type, index: true 
    end
  end
end
