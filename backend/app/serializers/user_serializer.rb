class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true
  
  attributes :id, :username, :email
  has_many :authentications  
end
