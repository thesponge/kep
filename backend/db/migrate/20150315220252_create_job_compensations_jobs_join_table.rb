class CreateJobCompensationsJobsJoinTable < ActiveRecord::Migration
  def change
    create_table :job_compensations_jobs, id: false do |t|
      t.belongs_to :job, index: true
      t.belongs_to :job_compensation, index: true
    end
  end
end
