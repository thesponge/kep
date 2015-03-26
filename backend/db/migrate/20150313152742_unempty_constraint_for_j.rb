class UnemptyConstraintForJ < ActiveRecord::Migration
  def change
    change_column_null :jobs, :title, false
    change_column_null :jobs, :description, false
    
    change_column_null :requests, :description, false 
    change_column_null :requests, :title, false
    
  end
end
