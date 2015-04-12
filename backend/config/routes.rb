MyBackend::Application.routes.draw do
#  get 'passwords_reset/new'
  defaults format: "json" do

    devise_for :users, controllers: { sessions: 'sessions', passwords: 'passwords', confirmations: 'confirmations' }
    
    #match "*all" => "application#cors_preflight_check", :constraints => { :method => "OPTIONS" }, via: [:get, :post, :options]

    namespace :api, :defaults => {:format => :json} do
      namespace :v1 do
        
        resources :users, :only => [:update, :destroy,:create, :show]
        
        resources :accounts
        
        resources :assignments, :only => [:show, :index,:create, :update, :destroy]
        resources :assignment_types
        resources :assignment_rewards
        resources :resources, :only => [:show, :index,:create, :update, :destroy]
        resources :matches
        resources :affiliations
        resources :intentions
        resources :languages
        resources :locations
        resources :skills

        #match "/resources/:id" => "resources#show", via: [:get, :options]
        #match "/resources" => "resources#create", via: [:post, :options]
        #match "/resources" => "resources#index", via: [:get, :options]
        #match "/resources" => "resources#destroy", via: [:delete, :options]
        #match "/resources" => "resources#update", via: [:patch, :options]

        #controller :resources, path: '/resources' do
        #  match 'post_action', via: [ :post, :options]
        #  match 'get_action', via: [ :get, :options]
        #end
        
      end
    end
  end
  
end
