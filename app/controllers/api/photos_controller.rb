class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    debugger
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:image, :park_id)
  end
end
