class RemoveXYAddLeftTopToNotes < ActiveRecord::Migration[5.0]
  def change
    remove_column :notes, :x
    remove_column :notes, :y
    add_column :notes, :left, :integer
    add_column :notes, :top, :integer
  end
end
