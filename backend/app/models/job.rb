class Job < ActiveRecord::Base
  belongs_to :user
  
  validates :title, presence: true, lenght: { in: 5..150}
  validates :description, presence: true, lenght: {in: 100..3000}
end
