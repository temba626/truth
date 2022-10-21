class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # GET /comments
    def index 
        comments = Comment.all 
        render json: comments
    end

    # GET /comments/:id
    def show 
        comment = Comment.find(params[:id])
        render json: comment 
    end

    # POST /comments
    def create 
        comment = Comment.create(comment_params)
        render json: comment, status: :created
    end

    # PATCH /comments/:id
    def update
        comment = Comment.find(params[:id])
        if comment
            comment.update(update_params)
            render json: comment 
        else
            render json: { errors: ["Comment not found"] }, status: :not_found
        end
    end

    # DELETE /comments/:id
    def destroy 
        comment = Comment.find(params[:id])
        if comment 
            comment.destroy
            head :no_content
        else
            render json: { errors: ["Comment not found"] }, status: :not_found
        end
    end

    private

    def render_not_found_response
        render json: { error: "Comment not found" }, status: :not_found
    end

    def comment_params
        params.permit(:content, :user_id, :post_id)
    end

    def update_params
        params.permit(:title)
    end

end

