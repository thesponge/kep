class Resource < ActiveRecord::Base
  belongs_to :user, inverse_of: :resources
  has_and_belongs_to_many :resource_priorities
  
  has_many :intention_maps, :as => :intention_map
  has_many :intentions, :through => :intention_maps

  accepts_nested_attributes_for :resource_priorities
  
  validates :title, presence: true, length: { in: 5..150 }
  validates :description, presence: true, length: { in: 100..3000}
end
