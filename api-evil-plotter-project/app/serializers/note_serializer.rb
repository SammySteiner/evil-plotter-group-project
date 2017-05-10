class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :x, :y, :height, :width, :board_id
end
