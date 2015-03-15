class CreateRequestPrioritiesRequests < ActiveRecord::Migration
  def change
    create_table :request_priorities_requests do |t|
      t.belongs_to :request, index: true
      t.belongs_to :request_priority
    end
  end
end
