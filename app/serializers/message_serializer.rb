class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :group, :user

  belongs_to :user
  belongs_to :group
end
