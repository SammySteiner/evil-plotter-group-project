Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resource :boards, only: [:create, :show, :update, :delete]

      get '/users/:id/boards/', to: "boards#index"

      resource :notes, only: [:index, :create, :update, :delete]
    end
  end

  resource :users, only: [:create]
end
