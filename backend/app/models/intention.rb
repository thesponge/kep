class Intention < ActiveRecord::Base
  has_many :intention_maps, :dependent => :destroy
  has_many :accounts, :through => :intention_maps, :source => :intention_map, :source_type => "Account"
  has_many :resources, :through => :intention_maps, :source => :intention_map, :source_type => "Resource"
 
end
