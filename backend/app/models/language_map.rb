class LanguageMap < ActiveRecord::Base
  belongs_to :language_map, :polymorphic => true
  belongs_to :language
end
