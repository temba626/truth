class MessagesController < ApplicationController
  # before_action :set_message, only: [:show, :update, :destroy, :create]

  # GET /messages
  def index
    @messages = Message.all

    render json: @messages
  end

  # GET /messages/1
  def show
    render json: @message
  end

  # POST /messages
  def create
    user_id = session[:user_id]
    user = User.find(user_id)
    group = Group.find(params[:group_id])
    message = user.messages.create!(message_params)
    render json: message, status: :created
end

  # PATCH/PUT /messages/1
  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.permit(:content, :user_id, :group_id)
    end
end
