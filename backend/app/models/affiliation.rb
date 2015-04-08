class Affiliation < ActiveRecord::Base
  has_and_belongs_to_many :accounts
  
  validates :affiliation, presence: true
end
