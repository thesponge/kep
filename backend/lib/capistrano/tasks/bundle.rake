namespace :bundle do
  desc "Build ember files into Rails' public directory"
  task :local_copy do
    on roles(:app) do
      execute "cp -r #{shared_path}/bundle #{release_path}/vendor/"
    end
  end
end

# disabled it for now, there must be another way!
#after "deploy:updated", "bundle:local_copy"
