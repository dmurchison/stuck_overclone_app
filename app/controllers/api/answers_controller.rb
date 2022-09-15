class Api::AnswersController < ApplicationController
  
  before_action :require_logged_in, only: [:create]

  def show
    # debugger
    @answer = Answer.find(params[:id])
    @author = User.find_by(id: @answer.author_id)
    render :show
  end

  def create
    # debugger
    @answer = Answer.new(answer_params)
    @answer.author_id = current_user.id
    @answer.question_id = params[:question_id]
    if @answer.save 
        render :show
    else
        render json: @answer.errors.full_messages, status: 422
    end
  end

  def update
    # debugger
    @answer = current_user.answers.find(params[:id])
    if @answer.update(answer_params)
        render :show
    else
        render json: @answer.errors.full_messages, status: 422
    end
  end

  def destroy
    # debugger
    @answer = Answer.find(params[:id])
    if @answer.destroy
        render :show
    else
        render json: @answer.errors.full_messages, status: 422
    end
  end

  def upvote
    # debugger
    vote(1)
  end

  def downvote
    # debugger
    vote(-1)
  end


  private
  
  def vote(direction)
    @answer = Answer.find(params[:id])
    @vote = @answer.votes.find_or_initialize_by(user: current_user)
    @vote.update(votes_number: direction)
    render :show
  end

  def answer_params
    params.require(:answer).permit(:id, :body, :author_id, :question_id)
  end

end
