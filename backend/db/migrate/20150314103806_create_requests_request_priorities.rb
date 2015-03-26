class CreateRequestsRequestPriorities < ActiveRecord::Migration
  def change
    create_table :requests_request_priorities do |t|
      t.belongs_to :request, index: true
      t.integer :request_priority, index: true
    end
  end
end
