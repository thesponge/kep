class Job < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :job_types
  has_and_belongs_to_many :job_compensations
  has_and_belongs_to_many :job_priorities
  
  validates :title, presence: true, length: { in: 5..150 }
  validates :description, presence: true, length: { in: 100..3000}
end
