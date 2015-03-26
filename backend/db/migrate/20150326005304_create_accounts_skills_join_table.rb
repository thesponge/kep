class CreateAccountsSkillsJoinTable < ActiveRecord::Migration
  def change
    create_table :accounts_skills, id: false do |t|
      t.belongs_to :account, index: true
      t.belongs_to :skill, index: true
    end
  end
end
