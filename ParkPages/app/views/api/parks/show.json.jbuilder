json.extract! @park, :id, :name, :street, :city, :state, :zip_code, :phone_number, :website, :photo_url

json.avg_rating @avg_rating
# photo url is useless, make sure to seed with image url
json.image_url asset_path(@park.image.url)


#
#
# json.array! @parks do |park|
#   json.id park.id
#   json.name park.name
#   json.street park.street
#   json.city park.city
#   json.state park.state
#   json.zip_code park.zip_code
#   json.phone_number park.phone_number
#   json.website park.website
#   json.image_url asset_path(park.image.url)
#   json.tags park.tags
# end
