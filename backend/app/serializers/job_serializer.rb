class JobSerializer < ActiveModel::Serializer
  attributes :id, :title
  
#  belongs_to :user
  has_many :job_types
  has_many :job_compensations
  has_many :job_priorities
end