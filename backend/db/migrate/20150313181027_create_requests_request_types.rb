class CreateRequestsRequestTypes < ActiveRecord::Migration
  def change
    create_table :requests_request_types do |t|
      t.belongs_to :request, index: true
      t.integer :request_type, index: true
    end
  end
end
