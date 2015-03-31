class Job < ActiveRecord::Base
  include Filterable
  
  belongs_to :user, inverse_of: :jobs
  
  has_and_belongs_to_many :job_types 
  has_and_belongs_to_many :job_compensations
  has_and_belongs_to_many :job_priorities
  
  validates :title, presence: true, length: { in: 5..150 }
  validates :description, presence: true, length: { in: 100..3000}
  
  scope :title, -> (title) {where title: title}
  scope :travel, -> (travel) {where travel: travel}
  scope :driver_license, -> (driver_license) {where driver_license: driver_license}
#  scope :has_job_category, joins(:job_types).merge(JobType.category)
  
#  def self.has_job_types(job_type_ids=[])
#    return all if job_type_ids.blank? || job_type_ids.empty?
#    includes(:job_types).where(job_types: { id: job_type_ids })
#  end

end
