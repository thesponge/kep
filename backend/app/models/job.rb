class Job < ActiveRecord::Base
  include Filterable
  
  belongs_to :user, inverse_of: :jobs  
  has_and_belongs_to_many :job_types 
  has_and_belongs_to_many :job_compensations
  has_and_belongs_to_many :job_priorities
  
  accepts_nested_attributes_for :job_priorities
  
  validates :title, presence: true, length: { in: 5..150 }
  validates :description, presence: true, length: { in: 100..3000}
  
  scope :title, -> (title) {where title: title}
  scope :travel, -> (travel) {where travel: travel}
  scope :driver_license, -> (driver_license) {where driver_license: driver_license}


end
