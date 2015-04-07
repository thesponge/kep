class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :description, :travel, :driver_license
  
  has_many :resource_priorities
  has_many :intentions
end
