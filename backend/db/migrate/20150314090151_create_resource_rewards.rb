class CreateResourceRewards < ActiveRecord::Migration
  def change
    create_table :resource_rewards do |t|
      t.string :reward, null: false
    end
  end
end
