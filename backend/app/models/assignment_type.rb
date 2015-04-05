class AssignmentType < ActiveRecord::Base
  has_and_belongs_to_many :assignments 
  
  validates :category, presence: true
  
  scope :category, -> (category) {where category: category}
end
