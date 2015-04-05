class CreateResourcePrioritiesResourcesJoinTable < ActiveRecord::Migration
  def change
    create_table :resource_priorities_resources, id: false do |t|
      t.belongs_to :resource, index: true
      t.belongs_to :resource_priority
    end
  end
end
