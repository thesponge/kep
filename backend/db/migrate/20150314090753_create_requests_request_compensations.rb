class CreateRequestsRequestCompensations < ActiveRecord::Migration
  def change
    create_table :requests_request_compensations do |t|
      t.belongs_to :requests, index: true
      t.integer :request_compensations, index: true
    end
  end
end
