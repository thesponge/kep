class AddFontawesomeColumn < ActiveRecord::Migration
  AFFECTED_TABLES = [:job_types, :job_compensations, :request_types, :request_compensations]

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
