class ScoresController < ApplicationController

  def index
    scores = Score.all
    render json: scores
  end

  def show
    puts "params", params
    scores = Score.where(user: params[:user])
    render json: scores
  end

end
