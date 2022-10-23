class UserGroupSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_one :user
  has_one :group
  has_many :messages
end
