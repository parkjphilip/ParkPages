class Api::ReviewsController < ApplicationController

  def index
    @park = Park.find(params[:park_id])
    @reviews = @park.reviews
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:user_id, :park_id, :body, :rating)
  end

end
