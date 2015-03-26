class CreateJobTypesJobs < ActiveRecord::Migration
  def change
    create_table :job_types_jobs do |t|
      t.belongs_to :job, index: true
      t.belongs_to :job_type, index: true
    end
  end
end
