class CreateJobPrioritiesJobs < ActiveRecord::Migration
  def change
    create_table :job_priorities_jobs do |t|
      t.belongs_to :job, index: true
      t.belongs_to :job_priority, index: true
    end
  end
end
