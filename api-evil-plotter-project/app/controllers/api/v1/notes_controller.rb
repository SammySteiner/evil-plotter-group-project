class Api::V1::NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    @notes = Note.all.where("board_id = ?", params[:board_id])
    render json: @notes
  end

  def show
    @note = Note.all.where("board_id = ? and id = ?", params[:board_id], params[:id])
    render json: @note
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: @note
    else
      puts "create error"
    end
  end

  def update
    @note.update(note_params)
  end

  def delete
    @note.destory
  end

  private

  def set_note
    @note = Note.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:id, :title, :content, :left, :top, :height, :width)
  end

end
