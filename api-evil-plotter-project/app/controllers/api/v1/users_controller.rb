class Api::V1::UsersController < ApplicationController

  def new
    puts "users new"
  end

  def create
    puts "users create"

    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      @boards = Board.all.where("user_id = ?", @user.id)
      render json: { user_boards: @boards, user_id: @user.id }
    else
      redirect_to '/'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :password_confirmation)
  end

end
