json.extract! @park, :id, :name, :street, :city, :state, :zip_code, :phone_number, :website, :photo_url
# photo url is useless, make sure to seed with image url
json.image_url asset_path(@park.image.url)
