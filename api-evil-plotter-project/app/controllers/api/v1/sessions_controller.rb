class Api::V1::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(user_params)
    if @user
      session[:user_id] = @user.id
      @boards = Board.all.where("user_id = ?", @user.id)
      render json: { user_boards: @boards, user_id: @user.id }
    else
      redirect_to '/'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

end
