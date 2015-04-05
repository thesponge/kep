class CreateAssignmentPriorities < ActiveRecord::Migration
  def change
    create_table :assignment_priorities do |t|
      t.text :priority, null: false
    end
  end
end
