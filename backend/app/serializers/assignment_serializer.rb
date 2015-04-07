class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :description, :travel, :driver_license
  
  embed :ids, include: true
  has_many :assignment_rewards
  has_many :assignment_priorities
end
