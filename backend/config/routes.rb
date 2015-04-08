MyBackend::Application.routes.draw do
#  get 'passwords_reset/new'
  defaults format: "json" do

    devise_for :users, controllers: { sessions: 'sessions', passwords: 'passwords', confirmations: 'confirmations' }
    
    namespace :api, :defaults => {:format => :json} do
      namespace :v1 do
        
        resources :users, :only => [:update, :destroy,:create, :show] 
        
        resources :users do
          resource :account
        end
        
        resources :assignments, :only => [:show, :index,:create, :update, :destroy]
        resources :assignment_types
        resources :assignment_rewards
        resources :resources, :only => [:show, :index]
        resources :resources, :only => [:create, :update, :destroy]
        resources :matches
        resources :affiliations
        
      end
    end
  end
  
end
