class CreateAccountsLanguagesJoinTable < ActiveRecord::Migration
  def change
    create_table :accounts_languages, id: false do |t|
      t.belongs_to :account, index: true
      t.belongs_to :language, index: true
    end
  end
end
