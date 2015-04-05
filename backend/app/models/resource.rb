class Resource < ActiveRecord::Base
  belongs_to :user, inverse_of: :resources
  
  has_and_belongs_to_many :resource_types
  has_and_belongs_to_many :resource_rewards
  has_and_belongs_to_many :resource_priorities

  accepts_nested_attributes_for :resource_priorities
  
  validates :title, presence: true, length: { in: 5..150 }
  validates :description, presence: true, length: { in: 100..3000}
end
