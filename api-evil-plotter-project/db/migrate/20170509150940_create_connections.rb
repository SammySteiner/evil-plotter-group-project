class CreateConnections < ActiveRecord::Migration[5.0]
  def change
    create_table :connections do |t|
      t.integer :note_id
      t.integer :connected_note_id

      t.timestamps
    end
  end
end
