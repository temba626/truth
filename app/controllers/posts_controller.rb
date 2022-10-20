class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # GET /posts
    def index 
        posts = Post.all 
        render json: posts
    end

    # GET /posts/:id
    def show 
        post = Post.find(params[:id])
        render json: post 
    end

    # POST /posts
    def create 
        post = Post.create(post_params)
        render json: post, status: :created
    end

    # PATCH /posts/:id
    def update
        post = Post.find(params[:id])
        if post
            post.update(update_params)
            render json: post 
        else
            render json: { error: "Post not found" }, status: :not_found
        end
    end

    # DELETE /poststs/:id
    def destroy 
        post = Post.find(params[:id])
        if post
            post.destroy
            head :no_content
        else
            render json: { error: "Post not found" }, status: :not_found
        end
    end

    private

    def render_not_found_response
        render json: { error: "Post not found" }, status: :not_found
    end

    def post_params
        params.permit(:title, :content, :user_id  )
    end


    def update_params
        params.permit(:title)
    end
end
