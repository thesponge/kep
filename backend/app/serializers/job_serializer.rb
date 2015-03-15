class JobSerializer < ActiveModel::Serializer
  attributes :id , :title , :description
  has_and_belongs_to_many :job_types 
  has_and_belongs_to_many :job_compensations
  has_and_belongs_to_many :job_priorities
end
