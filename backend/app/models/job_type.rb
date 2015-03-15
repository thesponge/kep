class JobType < ActiveRecord::Base
  has_and_belongs_to_many :jobs 
  
  validates :category, presence: true
end
