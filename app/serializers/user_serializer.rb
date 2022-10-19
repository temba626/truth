class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :status, :cohort
end
