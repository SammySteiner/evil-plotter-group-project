class Connection < ApplicationRecord
  belongs_to :note
  belongs_to :connected_note, class_name: "note"
end
