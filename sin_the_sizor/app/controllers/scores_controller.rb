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

  def create
    puts "params for create", params[:user], params[:score]
    new_score = Score.new(user: params[:user], score: params[:score])

    if new_score.save
      render json: new_score
    else
      render json: {'error': new_score.errors}
    end
  end

  def destroy
   found_user = Score.where(user: params[:user])
   Score.destroy(found_user)
     render json: {'users': Score.all}
 end

end
