class Api::V1::NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    @notes = Note.all
    render json: @notes
  end

  def show
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
    puts "update note successful"
  end

  def delete
    @note.destory
    puts "note deleted"
  end

  private

  def set_note
    @note = Note.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:title, :content, :x, :y, :height, :width)
  end

end
