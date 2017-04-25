class Api::ParksController < ApplicationController

  def index
    if (params[:park][:name].blank?)
      @parks = Park.all
    else
      nameparks = Park.name_search(params[:park][:name])
      tagparks = Park.tag_search(params[:park][:name])
      @parks = nameparks + tagparks
    end
    # if (params[:park][:name])
    #
    #   nameparks = Park.name_search(params[:park][:name])
    #   tagparks = Park.tag_search(params[:park][:name])
    #   @parks = nameparks + tagparks
    #   # @parks = Park.all.where("name ILIKE ?", "%#{park_params[:name]}%")
    #   # have to also search for tags through has_many tags association
    # else
    #
    #   @parks = Park.all
    # end
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
    @avg_rating = sum / ratings.length
    @num_ratings = ratings.length
    render :show
  end

  private
  def park_params
    params.require(:park).permit(:name, :street, :city, :state,
                                :zip_code, :phone_number)
  end

end
