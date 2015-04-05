class CreateAssignmentPrioritiesAssignmentsJoinTable < ActiveRecord::Migration
  def change
    create_table :assignment_priorities_assignments, id: false do |t|
      t.belongs_to :assignment, index: true
      t.belongs_to :assignment_priority, index: {name: 'idx_assignment_priorities_assignments_on_assignment_priority_id'}
    end
  end
end
