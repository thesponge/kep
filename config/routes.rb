Rails.application.routes.draw do
  devise_for :users, controllers: {sessions: 'sessions'}
  root 'ember#bootstrap'
  get '/*path' => 'ember#bootstrap'
end
