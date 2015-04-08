class CreateAccountsAffiliationsJoinTable < ActiveRecord::Migration
  def change
    create_table :accounts_affiliations, id: false do |t|
      t.belongs_to :account, index: true
      t.belongs_to :affiliation, index: true
    end
  end
end
