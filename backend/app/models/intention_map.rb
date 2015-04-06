class IntentionMap < ActiveRecord::Base
  belongs_to :intention_map, :polymorphic => true
  belongs_to :intention
end
