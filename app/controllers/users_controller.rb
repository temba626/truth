class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def index
      render json: User.all, status: :ok
  end

  def show

      user = User.find(session[:user_id])
      if user
          render json: user
      else
          render json: {error: "Not authorized"}, status: :unauthorized
      end
  end

  def update
      user= User.find_by(id: params[:id])
      user.update!(username: params[:username])
      render json: user, status: :accepted
  end

  def create 
      user = User.create!(user_params)
      if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
      else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
  end

  private
  def user_params
      params.permit :username, :password, :email, :password_confirmation
  end

  def not_found_response
      render json: {error: "User not found"}, status: :not_found
  end
  def unprocessable_entity_response(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
