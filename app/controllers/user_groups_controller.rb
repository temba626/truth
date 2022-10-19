class UserGroupsController < ApplicationController

    def index
        render json: UserGroup.all
    end

    def show
        user_group = UserGroup.find_by(id: params[:id])
        render json: user_group
    end

    def create
        user_group = UserGroup.create(user_group_params)
        user = user_group.user
    end

    private

    def user_group_params
        params.permit(:user_id, :group_id)
    end
end
