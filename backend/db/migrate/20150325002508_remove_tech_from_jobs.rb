class RemoveTechFromJobs < ActiveRecord::Migration
  def change
    remove_column :jobs, :tech, :boolean
  end
end
