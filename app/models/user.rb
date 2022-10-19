class User < ApplicationRecord
    has_many :comments
    has_many :posts
    has_many :user_groups
    has_many :groups, through: :user_groups
end
