class MainController < ActionController::Base
  before_action :force_json, only: :search

  def search
    @questions = Question.ransack(title_cont: params[:q]).result(distinct: true)
    render :main
  end

private
  
  def force_json
    request.format = :json
  end

end

