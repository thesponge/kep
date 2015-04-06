class AddFontawesomeColumn < ActiveRecord::Migration
  AFFECTED_TABLES = [:assignment_types, :assignment_rewards]

  def self.up
    AFFECTED_TABLES.each do |t|
      add_column t, :icon, :string
    end
  end

  def self.down
    AFFECTED_TABLES.each do |t|
      remove_column t, :icon, :string
    end
  end
end
