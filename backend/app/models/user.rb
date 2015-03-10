
class User < ActiveRecord::Base
  attr_accessible :username, :email, :password, :password_confirmation, :authentications_attributes
  
  authenticates_with_sorcery! do |config|
    config.authentications_class = Authentication
  end

  has_many :authentications, :dependent => :destroy
  accepts_nested_attributes_for :authentications
  has_many :submissions, :dependent => :destroy

  
  validates :password, length: { minimum: 5 }
  validates :password, confirmation: true
  validates :password_confirmation, presence: true
  
  validates :email, uniqueness: true

  validates :username, uniqueness: true
  validates :username, length: { minimum: 4 }
end
