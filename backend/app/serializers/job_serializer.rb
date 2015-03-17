class JobSerializer < ActiveModel::Serializer
  attributes :id , :title
  
# belongs_to :user
# has_and_belongs_to_many :job_types, serializer: JobTypeSerializer
  
# has_and_belongs_to_many :job_compensations
# has_and_belongs_to_many :job_priorities
end
