class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
    render "api/questions/index"
  end

  def show
    @question = Question.find_by(id: params[:id])
    if @question
      render "api/questions/show"
    else
      render json: ["No questions or answers match your discription"], status: 404
    end
  end

  def create
    @question = Question.new(question_params)
    @question.author_id = current_user.id
    if @question.save
      render "api/questions/show"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = current_user.questions.find(params[:id])
    if @question.update(question_params)
      render "api/questions/show"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    if @question.destroy
      render "api/questions/show"
    else
      render json @question.errors.full_messages, status: 422
    end
  end
  
  private

  def question_params
    params.require(:question).permit(:title, :body, :author_id)
  end

end
