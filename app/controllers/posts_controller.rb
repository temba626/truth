class PostsController < ApplicationController
    # before_action :authorize
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # GET /posts
    def index 
        posts = Post.all 
        render json: posts
    end
    
    def new
        render json: Post.last(3)
    end

    # GET /posts/:id
    def show 
        post = Post.find(params[:id])
        render json: post 
    end

    # POST /posts
    def create 
        user_id = session[:user_id]
        user = User.find(user_id)
        post = user.posts.create(post_params)
        render json: post, status: :created
    end

    # PATCH /posts/:id
    def update
        post = Post.find(params[:id])
        if post
            post.update(update_params)
            render json: post 
        else
            render json: { errors: ["Post not found"] }, status: :not_found
        end
    end

    # DELETE /poststs/:id
    def destroy 
        post = Post.find(params[:id])
        if post
            post.destroy
            head :no_content
        else
            render json: { errors: ["Post not found"] }, status: :not_found
        end
    end

    private

    def render_not_found_response
        render json: { errors: ["Post not found"] }, status: :not_found
    end

    def post_params
        params.permit(:title, :content  )
    end


    def update_params
        params.permit(:title)
    end
    def authorize
        return render json: {errors: ["Unauthorized"]}, status: :unauthorized unless session[:user_id]
    end
end
