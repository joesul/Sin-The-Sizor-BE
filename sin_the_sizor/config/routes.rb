Rails.application.routes.draw do

  # active record db to handle scores
  get "/scores" => "scores#index"
  get "/scores/:user" => "scores#show"
  post "/scores/new" => "scores#create"
  delete "/scores/:user" => "scores#destroy"
  
end
