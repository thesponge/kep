class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :description, :travel, :driver_license
  
  has_many :resource_types
  has_many :resource_rewards
  has_many :resource_priorities
end
