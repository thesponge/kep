class DropJobsJobCompensationsTable < ActiveRecord::Migration
  def up
    drop_table :jobs_job_compensations
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
