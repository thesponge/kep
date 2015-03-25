class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :travel, :driver_license
  
  has_many :job_types
  has_many :job_compensations
  has_many :job_priorities
end
