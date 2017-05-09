class Note < ApplicationRecord
  belongs_to :board
  has_many :connections
  has_many :connected_notes, through: :connections
end
