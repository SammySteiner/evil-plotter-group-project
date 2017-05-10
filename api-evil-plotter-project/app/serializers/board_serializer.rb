class BoardSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title
end
