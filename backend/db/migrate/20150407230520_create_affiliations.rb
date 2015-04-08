class CreateAffiliations < ActiveRecord::Migration
  def change
    create_table :affiliations do |t|
      t.string :affiliation, null: false
      t.string :link
    end
  end
end
