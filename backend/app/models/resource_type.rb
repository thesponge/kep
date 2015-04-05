class ResourceType < ActiveRecord::Base
  has_and_belongs_to_many :resources
  
  validates :category, presence: true
end
