Rails.application.routes.draw do
  devise_for :users
  root 'ember#bootstrap'
  get '/*path' => 'ember#bootstrap'
end
