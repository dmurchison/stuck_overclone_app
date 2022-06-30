class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if params[:user][:password].empty?
      render json: ["Password can't be blank"]
    elsif @user.nil?
      render json: ["Invalid email/password combination"]
    elsif !params[:user][:password].include?('@')
      render json: ["Please use a valid email address"]
    else
      login!(@user)
      render "api/users/show";
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["Please sign in"], status: 404
    end
  end

end
