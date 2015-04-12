namespace :database do
  desc "Migrate database"
  task :migrate do
    on roles(:app) do
      execute "RAILS_ENV=staging bundle exec db:migrate"
    end
  end
end

# disabled it for now, there must be another way!
#after "deploy:migrate", "database:migrate"
