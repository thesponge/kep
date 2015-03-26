class AddTravelToRequest < ActiveRecord::Migration
  def change
    add_column :requests, :travel, :boolean
    add_column :requests, :driver_license, :boolean
  end
end
