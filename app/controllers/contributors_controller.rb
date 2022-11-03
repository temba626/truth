class ContributorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    # GET /ConContributors
    def index 
       contributors =Contributor.all
        render json:contributors
    end
     # GET /ConContributors
     def show
        contributors =Contributor.where(fundraisergroupid:params[:id])
         render json:contributors
     end

    
    # POST /ConContributors
    def create 
       contributors =Contributor.create(contributors_params)
        render json:contributors, status: :created
    end


    # DELETE /ConContributors/:id
    def destroy 
       contributors =Contributors.find(params[:id])
        if contributors 
                Contributors.destroy
                head :no_content
        else
            render json: { errors: ["ConContributors not found"] }, status: :not_found
        end
    end

    private

    def render_not_found_response
        render json: { errors: ["Contributors not found"] }, status: :not_found
    end

    def contributors_params
        params.permit(:name,:amount,:fundraisergroupid)
    end
end
