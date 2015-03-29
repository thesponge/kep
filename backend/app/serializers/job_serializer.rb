class JobSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :description, :travel, :driver_license
  
  embed :ids, include: true
  has_many :job_types
  has_many :job_compensations
  has_many :job_priorities
end
