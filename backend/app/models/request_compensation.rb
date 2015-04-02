class RequestCompensation < ActiveRecord::Base
  has_and_belongs_to_many :requests
  
  validates :compensation, presence: true
end
