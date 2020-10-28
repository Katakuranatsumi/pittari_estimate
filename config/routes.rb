Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :create], format: 'json'
  resources :tasks, only: [:index, :show, :create, :destroy], format: 'json'
end
