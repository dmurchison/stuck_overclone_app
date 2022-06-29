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
      render json: ['No questions or answers match your discription'], status: 404
    end
  end

  def create
    @question = Question.new(question_params)
    @question.author_id = current_user.id

    if @question.save
      render 'api/questions/show'
    else
      render json: 
    end
  end
  


end
