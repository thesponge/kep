require 'rake'

task :run do
  pids = [
    spawn("cd backend && EMBER_PORT=4900 rails s -p 3900"),
    spawn("cd frontend && ./node_modules/.bin/ember server --port=4900 --proxy=http://0.0.0.0:3900"),
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end

task :test do
  pids = [
    spawn("cd backend && EMBER_PORT=4900 rails s -p 3900 -e test"),
    spawn("cd frontend && ./node_modules/.bin/ember test --server"),
  ]
end

task :deploy, :app_name do |t, args|
  args.with_defaults(:app_name => 'kep-ember')
    
#Destroy previous and create new heroku app 
  sh "heroku apps:destroy --app #{args[:app_name]} --confirm #{args[:app_name]}"
  sh "heroku apps:create #{args[:app_name]}"
    
#    Create deploy brances
#  sh 'git checkout master'
#  sh 'git branch -Dq rsh-production'
#  sh 'git branch -Dq rails-served-html'
    
  sh 'git branch -f rsh-production'
  sh 'git checkout rsh-production'
  sh 'git push --set-upstream origin rsh-production'
  sh 'git branch  -f rails-served-html'
  sh 'git checkout rails-served-html'
  sh 'git push --set-upstream origin rails-served-html'
    
  sh 'git checkout rsh-production'
  sh 'git merge rails-served-html -m "Merging master for deployment"'
  sh 'rm -rf backend/public'
  sh 'cd frontend && BROCCOLI_ENV=production broccoli build ../backend/public && cd ..'
  sh 'cd backend && rake assets:precompile && cd ..'

  unless `git status` =~ /nothing to commit, working directory clean/
    sh 'git add -A'
    sh 'git commit -m "Asset compilation for deployment"'
  end
 

  sh 'git subtree push -P backend heroku master'

  release_output = `heroku releases -a #{args[:app_name]} `.split "\n"
  latest_release = release_output[1].match(/v\d+/).to_s

  tags = `git tag`

  unless tags.include? latest_release
    sh "git tag #{latest_release}"
  end

  # Migrate and seed the database on remote
  sh 'heroku run rake db:migrate'
  sh 'heroku run rake db:seed'

  sh 'git checkout master'
    
  #Delete branches
  sh 'git branch -Dq rails-served-html'
  sh 'git branch -Dq rsh-production'
    
end
