MyBackend::Application.routes.draw do
#  get 'passwords_reset/new'

  devise_for :users, controllers: { sessions: 'sessions' }
  
  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resources :users, :only => [:update, :destroy]
      resources :users, :only => [:create, :show]
      resources :jobs, :only => [:create, :update, :destroy]
      resources :jobs, :only => [:show, :index]
      resources :job_types
      resources :requests, :only => [:show, :index]
      resources :requests, :only => [:create, :update, :destroy]
      resources :request_types
    end
  end
  
end
