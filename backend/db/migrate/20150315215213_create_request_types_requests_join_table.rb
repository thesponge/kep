class CreateRequestTypesRequestsJoinTable < ActiveRecord::Migration
  def change
    create_table :request_types_requests, id: false do |t|
      t.belongs_to :request, index: true
      t.belongs_to :request_type, index: true
    end
  end
end
