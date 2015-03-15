class CreateRequestCompensationsRequests < ActiveRecord::Migration
  def change
    create_table :request_compensations_requests do |t|
      t.belongs_to :request, index: true
      t.belongs_to :request_compensation
    end
    add_index :request_compensations_requests, :request_compensation_id, name: "req_compensation_id"
  end
end
