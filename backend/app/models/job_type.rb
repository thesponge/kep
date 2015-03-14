class JobType < ActiveRecord::Base
  has_and_belongs_to_many :jobs
  
  validates :type, presence: true
end
