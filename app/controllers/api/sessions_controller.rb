class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def show
    @user = current_user
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}, status: 200
    else
      render json: ["Please sign in"], status: 404
    end
  end

end
