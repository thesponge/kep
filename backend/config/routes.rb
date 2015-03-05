Rails.application.routes.draw do
  devise_for :users, controllers: {sessions: 'sessions'}
  root 'ember#bootstrap'
  get '/*path' => 'ember#bootstrap'

  namespace :api do
    get :csrf, to: 'csrf#index'
  end

end
