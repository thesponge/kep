class RequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :travel, :driver_license
  
  has_many :request_types
  has_many :request_compensations
  has_many :request_priorities
end
