class Assignment < ActiveRecord::Base
  include Filterable
  
  belongs_to :user, inverse_of: :assignments  
  has_and_belongs_to_many :assignment_types 
  has_and_belongs_to_many :assignment_rewards
  has_and_belongs_to_many :assignment_priorities
  
  accepts_nested_attributes_for :assignment_priorities
  
  validates :title, presence: true, length: { in: 5..150 }
  validates :description, presence: true, length: { in: 100..3000}
  
  scope :title, -> (title) {where title: title}
  scope :travel, -> (travel) {where travel: travel}
  scope :driver_license, -> (driver_license) {where driver_license: driver_license}


end
