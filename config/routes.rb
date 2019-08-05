Rails.application.routes.draw do
  devise_for :users
  root to: "home#show"
  match "*path", to: "home#show", via: :all

  namespace :api do
    # resources :assets, only: [:index, :show], constraints: { id: /[A-Za-z0-9\.-]+?/ }
  end

end
