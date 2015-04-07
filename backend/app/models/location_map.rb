class LocationMap < ActiveRecord::Base
  belongs_to :location_map, :polymorphic => true
  belongs_to :location
end