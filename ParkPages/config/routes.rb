Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :parks, only: [:index, :show, :create] do
      resources :reviews, only: [:create, :destroy, :update]
    end
    resources :search, only: [:index]
  end
  get 'api/parkreviews/:park_id', :to => 'api/reviews#index',:defaults => { :format => 'json' }
end
