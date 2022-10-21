class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :status, :cohort, :image_url
end
