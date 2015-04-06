class Account < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :skills
  has_and_belongs_to_many :languages
  
  has_many :intention_maps, :as => :intention_map_id
  has_many :intentions, :through => :intention_maps
  
  validates_presence_of :user
end
