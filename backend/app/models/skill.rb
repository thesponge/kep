class Skill < ActiveRecord::Base
  has_many :skill_maps, :dependent => :destroy
  has_many :accounts, :through => :skill_maps, :source => :skill_map, :source_type => "Account"
  has_many :assignments, :through => :skill_maps, :source => :skill_map, :source_type => "Assignment"
end
