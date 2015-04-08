class SkillMap < ActiveRecord::Base
  belongs_to :skill_map, :polymorphic => true
  belongs_to :skill
end
