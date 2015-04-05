class CreateAssignmentRewards < ActiveRecord::Migration
  def change
    create_table :assignment_rewards do |t|
      t.string :reward , null: false 
    end
  end
end
