class RequestType < ActiveRecord::Base
  has_and_belongs_to_many :requests
  
  validates :category, presence: true
end
