class DropRequestsRequestTypes < ActiveRecord::Migration
  def up
    drop_table :requests_request_types
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
