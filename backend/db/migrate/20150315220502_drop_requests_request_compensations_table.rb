class DropRequestsRequestCompensationsTable < ActiveRecord::Migration
  def up
    drop_table :requests_request_compensations
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
