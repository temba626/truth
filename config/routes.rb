Rails.application.routes.draw do
  
  resources :messages
  resources :comments
  resources :user_groups, only: [:index, :show, :create]
  resources :groups do
    resources :messages
  end
  resources :posts
  # resources :users
  get "/post", to: "posts#new"

  post "/signup", to: "users#create"
  get "/me/:id", to: "users#show"

  get "/users", to: "users#index"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  root "groups#index"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
