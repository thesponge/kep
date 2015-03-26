class CreateJobPrioritiesJobsJoinTable < ActiveRecord::Migration
  def change
    create_table :job_priorities_jobs, id: false do |t|
      t.belongs_to :job, index: true
      t.belongs_to :job_priority, index: true
    end
  end
end
