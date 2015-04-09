class Location < ActiveRecord::Base
  has_many :location_maps, :dependent => :destroy
  has_many :accounts, :through => :location_maps, :source => :location_map, :source_type => "Account"
  has_many :assignments, :through => :location_maps, :source => :location_map, :source_type => "Assignment"
  
end