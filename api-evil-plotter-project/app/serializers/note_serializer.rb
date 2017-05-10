class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :left, :top, :width, :height, :board_id
end
