class Group < ApplicationRecord
    validates :title, presence: true 
    
    has_many :messages
    has_many :user_groups
    has_many :users, through: :user_groups
end
