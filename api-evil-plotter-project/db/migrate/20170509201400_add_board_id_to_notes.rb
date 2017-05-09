class AddBoardIdToNotes < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :board_id, :integer
  end
end
