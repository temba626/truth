class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at
  has_one :user
  has_many :comments
  belongs_to :user
end
