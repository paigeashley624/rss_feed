Rails.application.routes.draw do
  # resources :reviews
  get 'reviews/fetch'
  get 'reviews/index'

end
