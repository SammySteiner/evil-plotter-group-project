class Note < ApplicationRecord
  belongs_to :board
  delegate :user, to: :board
  has_many :connections
  has_many :connected_notes, through: :connections
end
