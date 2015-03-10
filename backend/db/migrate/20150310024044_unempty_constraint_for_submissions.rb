class UnemptyConstraintForSubmissions < ActiveRecord::Migration
  def change
    change_column_null :submissions, :title, false
    change_column_null :submissions, :description, false 
  end
end
