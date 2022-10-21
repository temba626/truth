class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :user
  has_one :post
  belongs_to :post
end
