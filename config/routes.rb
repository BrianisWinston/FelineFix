Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resources :photos do
      resources :comments, only: [:create, :index]
    end
    resources :comments, only: [:destroy]
    resources :likes, only: [:create, :destroy]
  end
end
