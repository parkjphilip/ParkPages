class ParksController < ApplicationController
  def index
    @parks = Park.all
    render :index
  end

  def show
    @park = Park.find(params[:id])
    render :show
  end
end
