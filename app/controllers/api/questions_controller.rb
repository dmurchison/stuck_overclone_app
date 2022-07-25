class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
    render "/api/questions/index"
  end

  def show
    @question = Question.find(params[:id])
    render "/api/questions/show"
  end

  def create
    @question = Question.create(question_params)
    if @question.save
      render "/api/questions/show"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      render "/api/questions/show"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question= Question.find(params[:id])
    @question.destroy
    render "/api/questions/show"
  end
  
  private

  def question_params
    params.require(:question).permit(:title, :body, :author_id)
  end

end
