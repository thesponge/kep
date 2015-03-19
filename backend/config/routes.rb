MyBackend::Application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }
  
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :users
      resources :jobs
      resources :users
      resources :job_types
    end
  end
  
end
