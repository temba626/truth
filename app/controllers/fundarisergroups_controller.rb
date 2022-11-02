class FundarisergroupsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    # GET /fundarisergroups
    def index 
        fundarisergroups = Fundarisergroup.all
        render json: fundarisergroups
    end

    
    # POST /fundarisergroups
    def create 
        fundarisergroups = Fundarisergroup.create(fundarisergroups_params)
        render json: fundarisergroups, status: :created
    end


    # DELETE /fundarisergroups/:id
    def destroy 
        fundarisergroups = Fundarisergroup.find(params[:id])
        if fundarisergroups 
            fundarisergroups.destroy
            head :no_content
        else
            render json: { errors: ["fundarisergroups not found"] }, status: :not_found
        end
    end

    private

    def render_not_found_response
        render json: { errors: ["fundarisergroups not found"] }, status: :not_found
    end

    def fundarisergroups_params
        params.permit(:name,:description )
    end
end
