class CreateResourceTypesResourcesJoinTable < ActiveRecord::Migration
  def change
    create_table :resource_types_resources, id: false do |t|
      t.belongs_to :resource, index: true
      t.belongs_to :resource_type, index: true
    end
  end
end
