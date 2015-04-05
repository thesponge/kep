class AssignmentPriority < ActiveRecord::Base
  has_and_belongs_to_many :assignments
  
  validates :priority, presence: true 
end 
