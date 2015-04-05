class CreateResourceRewardsResourcesJoinTable < ActiveRecord::Migration
  def change
    create_table :resource_rewards_resources, id: false do |t|
      t.belongs_to :resource, index: true
      t.belongs_to :resource_reward
    end
    add_index :resource_rewards_resources, :resource_reward_id, name: "req_reward_id"
  end
end
