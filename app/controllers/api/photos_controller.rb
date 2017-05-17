class Api::PhotosController < ApplicationController
  def create
    debugger
    @photo = Photo.new(photo_params)
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:image, :user_id)
  end
end
