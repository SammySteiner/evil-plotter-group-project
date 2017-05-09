class BoardController < ApplicationController
  before_action: set_board, only: [:show, :update, :delete]

  def index
    # to "users/:id/boards" because of this filter by user
    @boards = Board.all.where("user_id = ?", user.id)
    render json: @boards
  end

  def show
    render json: @board
  end

  def create
		@board = Board.new(board_params)
		if @board.save
			render json: @board
		else
			puts "create error"
		end

  end

  def update
    if @board.update(board_params)
			render json: @board
    else
      puts "update error"
		end
  end

  def delete
    @board.destroy
    puts "board deleted"
  end

  private

  def set_board
    @board = Board.find(params[:id])
  end

  def board_params
    params.require(:board).permit(:title)
  end

end
