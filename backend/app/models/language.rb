class Language < ActiveRecord::Base
  has_many :language_maps, :dependent => :destroy
  has_many :accounts, :through => :language_maps, :source => :language_map, :source_type => "Account"
  has_many :assignments, :through => :language_maps, :source => :language_map, :source_type => "Assignment"
end
