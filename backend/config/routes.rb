MyBackend::Application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }
  
  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resources :users, :only => [:create, :update, :destroy] do
        resources :jobs, :only => [:create, :update, :destroy]
      end
      resources :jobs, :only => [:show, :index]
      resources :users, :only => [:show]
      resources :job_types
    end
  end
  
end
