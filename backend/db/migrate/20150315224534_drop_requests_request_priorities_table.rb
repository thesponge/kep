class DropRequestsRequestPrioritiesTable < ActiveRecord::Migration
  def up
    drop_table :requests_request_priorities
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
