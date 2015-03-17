class JobTypeSerializer < ActiveModel::Serializer
  attributes :id, :category
  has_and_belongs_to_many :jobs, serializer: JobSerializer
  
end
