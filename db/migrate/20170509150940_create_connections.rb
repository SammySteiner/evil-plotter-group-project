class CreateConnections < ActiveRecord::Migration[5.0]
  def change
    create_table :connections do |t|
      t.integer :note_id
      t.id :connected_note

      t.timestamps
    end
  end
end
