class UsersController < ApplicationController
    before_action :authorize_request, except: :create
    # before_action :find_user, except: %i[create index]

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
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

    # def show
    #     render json: @user, status: :ok
      
    # end
    private

    def user_params
        params.permit(:name,:email,:cohort,:username,:password, :password_confirmation, :status, :image_url)
    end

    # def find_user
    #     @user = User.find_by_username!(params[:_username])
    #     rescue ActiveRecord::RecordNotFound
    #       render json: { errors: 'User not found' }, status: :not_found
    #   end
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
