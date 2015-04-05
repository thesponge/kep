class ResourceReward < ActiveRecord::Base
  has_and_belongs_to_many :resources
  
  validates :reward, presence: true
end
