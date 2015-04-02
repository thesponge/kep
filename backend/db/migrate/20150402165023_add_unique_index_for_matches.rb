class AddUniqueIndexForMatches < ActiveRecord::Migration
  def change
    add_index "matches", ["job_id", "request_id"], :unique => true
  end
end
