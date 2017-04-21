class Api::ParksController < ApplicationController
  def index
    @parks = Park.all
    render :index
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
    render :show
  end

  private
  def park_params
    params.require(:park).permit(:name, :street, :city, :state, :zip_code,
                                  :phone_number)
  end

end