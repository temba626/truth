class GroupSerializer < ActiveModel::Serializer
  attributes :id, :title, :status

  has_many :messages
  has_many :users
end
