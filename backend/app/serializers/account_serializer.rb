class AccountSerializer < ActiveModel::Serializer
  attributes :id, :bio, :avatar, :url, :available, :display_name
  
  has_many :affiliations
  has_many :locations
  has_many :languages
  has_many :skills
  has_many :intentions
end
