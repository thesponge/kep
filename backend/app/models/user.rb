class User < ActiveRecord::Base
  has_many :assignments, inverse_of: :user
  has_many :resources, inverse_of: :user
  has_many :matches, inverse_of: :user
  has_one  :account, dependent: :destroy
  
  accepts_nested_attributes_for :account , allow_destroy: true
  before_create :build_account
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable
  before_save :ensure_authentication_token
  
  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end
 
  private
 
    def generate_authentication_token
      loop do
        token = Devise.friendly_token
        break token unless User.where(authentication_token: token).first
      end
    end
end
