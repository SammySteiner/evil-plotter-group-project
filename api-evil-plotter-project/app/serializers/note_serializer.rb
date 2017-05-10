class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :left, :top, :height, :width, :board_id
end
