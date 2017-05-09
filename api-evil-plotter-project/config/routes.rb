Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :boards, only: [:create, :show, :update, :delete]
      resources :notes, only: [:index, :create, :update, :delete]

    # Users Boards
      get '/users/:id/boards/', to: "boards#index"
      get '/users/:user_id/boards/:board_id', to: "boards#show"
      post '/users/', to: "users#create"
      post '/sessions/', to: "sessions#create"
      post '/sessions/:id', to: "sessions#update"
      delete '/sessions/:id', to: "sessions#delete"
    end
  end

end
