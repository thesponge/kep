namespace :ember do
  desc "Build ember files into Rails' public directory"
  task :build do
    system("rm -rf public")
    system("cd ../frontend; ember build; cp -r dist ../backend/public")
    #execute "rm -rf frontend"
    #execute "git clone #{repo_url} frontend"
    #execute "cd frontend; npm i; bower i; npm rebuild; ember build"
    #execute "rm -rf #{release_path}/public"
    #execute "cp dist #{release_path}/public"
    #execute "cd -"
    #execute "rm -rf frontend"
    on roles(:app) do
      upload! "public", "#{current_path}/", via: :scp, recursive: true
    end
  end
end

before "deploy:finishing", "ember:build"
