class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
    render :index
  end

  def show
    @question = Question.find_by(id: params[:id])
    if @question
      render :show
    else
      
    end
  end
  


end
