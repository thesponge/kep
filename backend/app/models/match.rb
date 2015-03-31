class Match < ActiveRecord::Base
  belongs_to :user, inverse_of: :matches
end
