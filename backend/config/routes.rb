MyBackend::Application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }
  #root to: "static#index"
  
  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resources :jobs
      resources :users
      resources :job_types
    end
  end
  
end
