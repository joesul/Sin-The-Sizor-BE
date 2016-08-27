Rails.application.routes.draw do

  # active record db to handle scores
  get "/scores" => "scores#index"
  get "/scores/:user" => "scores#show"

end
