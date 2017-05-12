Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do

      # BOARDS
      get '/users/:id/boards/', to: 'boards#index'
      get '/users/:user_id/boards/:board_id', to: 'boards#show'
      post '/users/:user_id/boards', to: 'boards#create'
      delete '/users/:user_id/boards/:board_id', to: 'boards#delete'
      put '/boards/', to: 'boards#update'

      # USERS
      post '/users/', to: "users#create"

      # SESSIONS
      post '/sessions/', to: "sessions#create"
      post '/sessions/:id', to: "sessions#update"
      delete '/sessions/:id', to: "sessions#delete"

      # NOTES
      get '/users/:user_id/boards/:board_id/notes/', to: 'notes#index'
      post '/notes/', to: 'notes#create'
      put '/notes/:id', to: 'notes#update'
      delete '/notes/:id', to: 'notes#delete'
      get '/users/:user_id/boards/:board_id/notes/:id', to: 'notes#show'


    end
  end

end
