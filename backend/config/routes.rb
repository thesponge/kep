MyBackend::Application.routes.draw do
#  get 'passwords_reset/new'
  defaults format: "json" do

    devise_for :users, controllers: { sessions: 'sessions', passwords: 'passwords', confirmations: 'confirmations' }
    
    namespace :api, :defaults => {:format => :json} do
      namespace :v1 do
        resources :users, :only => [:update, :destroy,:create, :show]
        resources :jobs, :only => [:show, :index,:create, :update, :destroy]
        resources :job_types
        resources :requests, :only => [:show, :index]
        resources :requests, :only => [:create, :update, :destroy]
        resources :request_types
        resources :matches
      end
    end
  end
  
end
