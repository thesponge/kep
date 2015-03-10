class UnemptyConstraintForUser < ActiveRecord::Migration
  def change
    change_column_null :users, :email, false
    change_column_null :users, :username, false
  end
end
