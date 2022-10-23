class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :user
  has_one :group
  belongs_to :user
  belongs_to :group
end
