class Request < ActiveRecord::Base
  belongs_to :user, inverse_of: :requests
  
  has_and_belongs_to_many :request_types
  has_and_belongs_to_many :request_compensations
  has_and_belongs_to_many :request_priorities

  accepts_nested_attributes_for :request_priorities
  
  validates :title, presence: true, length: { in: 5..150 }
  validates :description, presence: true, length: { in: 100..3000}
end
