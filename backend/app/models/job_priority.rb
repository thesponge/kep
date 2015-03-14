class JobPriority < ActiveRecord::Base
  has_and_belongs_to_many :jobs
  
  validates :priority, presence: true 
end 
