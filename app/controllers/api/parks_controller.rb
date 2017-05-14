class Api::ParksController < ApplicationController

  def index
    @parks = Park.all
    if (params[:park].nil?)
      @parks = Park.all
    else
      nameparks = Park.name_search(params[:park][:name])
      tagparks = Park.tag_search(params[:park][:name])
      @parks = nameparks + tagparks
    end
  end

  def create
    @park = Park.new(park_params)
    if @park.save
      render "api/parks/show"
    else
      render json: @park.errors.full_messages, status: 422
    end
  end

  def show
    @park = Park.find(params[:id])
    ratings = []
    @park.reviews.each do |review|
      ratings.push(review.rating)
    end

    sum = 0
    ratings.each do |rating|
      sum += rating
    end
    if ratings.length > 0
      @avg_rating = ((Float(sum) / Float(ratings.length) * 2).round) / (2.0)
    else
      @avg_rating = 0
    end
    @num_ratings = ratings.length

    render :show
  end

  private
  def park_params
    params.require(:park).permit(:name, :street, :city, :state,
                                :zip_code, :phone_number)
  end

end
