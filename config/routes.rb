Rails.application.routes.draw do

  # 'namespace' allows us to name these routes to easily make ajax requests on the frontend
  namespace :api, defaults: {format: :json} do

    # User Authentication Routes
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :index, :show, :update]
    
    # Question Routes
    resources :questions, only: [:index, :show, :create, :update, :destroy] do
      # 'member' allows us to attach the upvote and downvote ids to the questions
      member do
        post 'upvote'
        post 'downvote'
      end
      resources :answers, only: [:create]
    end
    # get request for searching questions index
    get "/search/:keywords", to "questions#search"

    # Answers Routes
    resources :answers, only: [:show, :update, :destroy] do
      member do
        post 'upvote'
        post 'downvote'
      end
    end

  end
  root "static_pages#root"
end
