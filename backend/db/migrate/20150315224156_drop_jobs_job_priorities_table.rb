class DropJobsJobPrioritiesTable < ActiveRecord::Migration
  def up
    drop_table :jobs_job_priorities
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
