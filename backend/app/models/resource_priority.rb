class ResourcePriority < ActiveRecord::Base
  has_and_belongs_to_many :resources

  validates :priority, presence: true 
end
