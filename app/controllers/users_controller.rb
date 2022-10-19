class UsersController < ApplicationController
    
    def index
        user=User.all
        render json: user, status: :ok
    end
    
    def show
        user=User.find(params[:id])
        if user
            render json: user
        else
            render json: { error: "User not found" }, status: :not_found
        end
        
    end
    def create
        user =User.create!(parameters)
        render json: user, status: :created
        
    end
  
    def update
        user=User.find(params[:id])
        user.update(number: params(:number))
        if user
            render json: user
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end
    def destroy
        user=User.find(params[:id])
        user.destroy
        head :no_content
    end
    private
    def parameters
        params.permit(:name,:email,:username,:cohort)
    end
end
