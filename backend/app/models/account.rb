class Account < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :skills
  has_and_belongs_to_many :languages
  
  validates_presence_of :user
end
