class DropJobsJobTypesTable < ActiveRecord::Migration
  def up
    drop_table :jobs_job_types
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
