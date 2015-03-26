class CreateJobsJobPriorities < ActiveRecord::Migration
  def change
    create_table :jobs_job_priorities do |t|
      t.belongs_to :job, index: true
      t.integer :job_priority, index: true
    end
  end
end
