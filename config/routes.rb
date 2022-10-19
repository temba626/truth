Rails.application.routes.draw do
  
  resources :user_groups only: [:index, :show, :create]
  resources :groups
  resources :posts
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
