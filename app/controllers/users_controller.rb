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
        user=User.create(user_params)
        if user.valid?
            session[:user_id]=user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def show
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
        user=User.find_by(id: session[:user_id])
        render json: user, status: :ok
      
    end
    private

    def user_params
        params.permit(:name,:email,:cohort,:username,:password, :password_confirmation, :status, :image_url)
    end
    # def index
    #     user=User.all
    #     render json: user, status: :ok
    # end
    
    # def show
    #     user=User.find(params[:id])
    #     if user
    #         render json: user
    #     else
    #         render json: { error: "User not found" }, status: :not_found
    #     end
        
    # end
    # def create
    #     user =User.create!(parameters)
    #     render json: user, status: :created
        
    # end
  
    # def update
    #     user=User.find(params[:id])
    #     user.update(number: params(:number))
    #     if user
    #         render json: user
    #     else
    #         render json: { error: "User not found" }, status: :not_found
    #     end
    # end
    # def destroy
    #     user=User.find(params[:id])
    #     user.destroy
    #     head :no_content
    # end
    # private
    # def parameters
    #     params.permit(:name,:email,:username,:cohort)
    # end
end
