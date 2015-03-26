class JobCompensation < ActiveRecord::Base
  has_and_belongs_to_many :jobs
  
  validates :compensation, presence: true
end
