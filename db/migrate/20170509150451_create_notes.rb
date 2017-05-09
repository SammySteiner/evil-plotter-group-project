class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :content
      t.integer :x
      t.integer :y
      t.integer :height
      t.integer :width

      t.timestamps
    end
  end
end
