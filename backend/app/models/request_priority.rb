class RequestPriority < ActiveRecord::Base
  has_and_belongs_to_many :requests

  validates :priority, presence: true 
end
