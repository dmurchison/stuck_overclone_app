Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :index, :show, :update]
    resources :questions, only: [:index, :show, :create: :update, :destroy]
  end
  root "static_pages#root"
end
