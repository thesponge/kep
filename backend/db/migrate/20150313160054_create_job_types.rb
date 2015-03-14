class CreateJobType < ActiveRecord::Migration
  def change
    create_table :job_types do |t|
      t.string :type , null: false

      t.timestamps null: false
    end
  end
end
