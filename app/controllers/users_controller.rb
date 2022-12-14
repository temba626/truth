class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def index
    #   render json: User.all, status: :ok
      render json: User.where.not(status: "admin")
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
      user.update!(update_params)
      render json: user, status: :accepted
  end

  def create
      @user = User.create!(user_params)
      @user.update(status:"normal")
      if @user.valid?
         session[:user_id] = @user.id
          render json: @user, status: :created
      else
          render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end

     # AccountMailer.new_account(@user).deliver_now
    #   respond_to do |format|
    #     format.html { redirect_to @user}
    #     format.js
    #   end
  end

  private

  def user_params
      params.permit(:username,:name, :cohort, :image_url, :password, :email, :password_confirmation)
  end

  def update_params
    params.permit(:username, :name, :cohort, :image_url)
  end

  def not_found_response
      render json: {error: "User not found"}, status: :not_found
  end

  def unprocessable_entity_response(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
