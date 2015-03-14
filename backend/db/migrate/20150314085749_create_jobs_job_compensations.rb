class CreateJobsJobCompensations < ActiveRecord::Migration
  def change
    create_table :jobs_job_compensations do |t|
      t.belongs_to :job, index: true
      t.integer :job_compensation, index: true
    end
  end
end
