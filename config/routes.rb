Rails.application.routes.draw do
  root to: "three_dimensions#show"
  resource :three_dimensions, only: [:show]
end
