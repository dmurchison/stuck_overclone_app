class Api::QuestionsController < ApplicationController
  before_action :require_logged_in

  def index
    if params[:searchTerm]
      args = params[:searchTerm].split(' ')
      @questions = []
      args.each do |arg|
        @questions.concat(Question.where("lower(title) LIKE ?", "%#{arg.downcase}%"))
      end
    else
      @questions = Question.all
    end
    @users = User.all
    render :index
  end

  def show
    @question = Question.find(params[:id])
    @author = User.find_by(id: @question.author_id)
    render :show
  end

  def create
    @question = Question.new(question_params)
    @question.author_id = current_user.id
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = current_user.questions.find(params[:id])
    if @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    if @question.destroy
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def upvote
    vote(1)
  end

  def downvote
    vote(-1)
  end


  private
  
  def vote(direction)
    @question = Question.find(params[:id])
    @vote = @question.votes.find_or_initialize_by(user: current_user)
    @vote.update(votes_number: direction)
    render :show
  end

  def question_params
    params.require(:question).permit(:title, :body, :author_id)
  end

end
