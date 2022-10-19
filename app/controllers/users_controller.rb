class UsersController < ApplicationController
    
    def index
        User=User.all
        render json: User, status: :ok
    end
    
    def show
        User=User.find(params[:id])
        if User
            render json: User
        else
            render json: { error: "User not found" }, status: :not_found
        end
        
    end
    def create
        User =User.create!(parameters)
        render json: User, status: :created
        
    end
  
    def update
        User=User.find(params[:id])
        User.update(number: params(:number))
        if User
            render json: User
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end
    def destroy
        User=User.find(params[:id])
        User.destroy
        head :no_content
    end
    private
    def parameters
        params.permit(:name,:email,:username,:status,:cohort)
    end
end
