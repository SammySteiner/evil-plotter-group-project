class Api::V1::BoardsController < ApplicationController
  before_action :set_board, only: [:update]

  def index
    puts "board index"
    # to "users/:id/boards" because of this filter by user
    @boards = Board.all.where("user_id = ?", params[:id])
    render json: @boards
  end

  def show
    puts "board show"
    @boards = Board.all.where("user_id = ?", params[:user_id])
    index = (params[:board_id].to_i - 1)
    @board = @boards[index]
    render json: @board
  end

  def create
    puts "board create"
		@board = Board.new(board_params)

		if @board.save
			render json: @board
		else
			puts "create error"
		end

  end

  def update
    puts "board update"
    if @board.update(board_params)
			render json: @board
    else
      puts "update error"
		end
  end

  def delete
    puts "board delete"
    @board = Board.find(params[:board_id])
    @board.destroy
    @boards = Board.all.where("user_id = ?", params[:user_id])
    render json: @boards
  end

  private

  def set_board
    @board = Board.find(params[:id])
  end

  def board_params
    params.require(:board).permit(:title, :board_id, :user_id)
  end

end
