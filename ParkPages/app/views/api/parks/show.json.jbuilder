json.extract! @park, :id, :name, :street, :city, :state, :zip_code, :phone_number, :website, :photo_url, :lat, :lng, :tags

json.avg_rating @avg_rating
json.num_ratings @num_ratings
json.image_url asset_path(@park.image.url)
