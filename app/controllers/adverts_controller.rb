class AdvertsController < ApplicationController

    def index
        ad = Advert.all
        render json: ad
    end

    def create
        ads = Advert.create(ad_params)
        render json: ads, status: :created
    end

    private

    def ad_params
        params.permit(:image_url)
    end
end
