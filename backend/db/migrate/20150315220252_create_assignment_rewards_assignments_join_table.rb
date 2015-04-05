class CreateAssignmentRewardsAssignmentsJoinTable < ActiveRecord::Migration
  def change
    create_table :assignment_rewards_assignments, id: false do |t|
      t.belongs_to :assignment, index: true
      t.belongs_to :assignment_reward, index: true
    end
  end
end
