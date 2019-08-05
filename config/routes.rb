Rails.application.routes.draw do
  devise_for :users
  root to: "home#show"
  match "*path", to: "home#show", via: :all
end
