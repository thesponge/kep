class CreateAssignmentTypesAssignmentsJoinTable < ActiveRecord::Migration
  def change
    create_table :assignment_types_assignments, id: false do |t|
      t.belongs_to :assignment, index: true
      t.belongs_to :assignment_type, index: true
    end
  end
end
