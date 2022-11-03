Rails.application.routes.draw do
  
  resources :contributors
  resources :fundarisergroups
  resources :user_groups, only: [:index, :show, :create]
  resources :groups  
  resources :posts
  resources :messages
  resources :adverts
  # resources :users

   # Serve websocket cable requests in-process
   mount ActionCable.server => '/cable'
   
  post  "/private_group", to: "groups#private_group"
  # resources :users
  get "/post", to: "posts#new"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  get "/users", to: "users#index"
  put "/users/:id", to: "users#update"


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  root "groups#index"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
