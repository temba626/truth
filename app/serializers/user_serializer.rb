class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :status, :cohort, :image_url, :created_at

  has_many :messages
  has_many :posts
  has_many :comments
end
