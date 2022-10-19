class UserGroupsController < ApplicationController
    def index 
        userGroups = UserGroup.all 
        render json: userGroups
    end
end
