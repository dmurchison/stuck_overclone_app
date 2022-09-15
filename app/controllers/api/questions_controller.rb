class Api::QuestionsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    # debugger
    if params[:searchTerm]
      keywords = params[:searchTerm].split(" ")
      @questions = []
      keywords.each do |keyword|
        @questions.concat(Question.where("lower(title) LIKE ?", "%#{keyword.downcase}%"))
      end
    else
      @questions = Question.all
    end

    @users = User.all
    render :index
  end

  def show
    # debugger
    @question = Question.find(params[:id])
    @author = User.find_by(id: @question.author_id)
    render :show
  end

  def create
    # debugger
    @question = Question.new(question_params)
    @question.author_id = current_user.id
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    # debugger
    @question = current_user.questions.find_by(id: params[:id])
    if @question
      if @question.update(question_params)
        render :show
      else
        render json: @question.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    # debugger
    @question = Question.find(params[:id])
    if @question.destroy
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def search
    # debugger
    @users = User.all
    keywords = params[:keywords].split(" ")
    questions = []
    keywords.each do |keyword|
      @questions.concat(Question.where("lower(title) LIKE ?", "%#{keyword.downcase}%"))
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
    @question = Question.find(params[:id])
    @vote = @question.votes.find_or_initialize_by(user: current_user)
    @vote.update(votes_number: direction)
    render :show
  end

  def question_params
    params.require(:question).permit(:id, :title, :body, :author_id)
  end

end
