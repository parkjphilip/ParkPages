# json.extract! @parks, :name, :street, :city,
# :state, :zip_code, :phone_number, :website, :photo_url
#
# @parks.each do |park|
#   json.set! business.id do
#     json.extract! business, :id, :name, :photo_url, :lat_coordinate,
#       :long_coordinate, :price, :rating
#   end
# end

# json.array! @parks, :id, :name, :street, :city, :state, :zip_code, :phone_number, :website, :photo_url
# @parks.each do |park|
#
#   json.image_url park.image.url(:medium)
# end
# json.image_url asset_path(@parks.image.url(:medium))

json.array! @parks do |park|
  json.id park.id
  json.name park.name
  json.street park.street
  json.city park.city
  json.state park.state
  json.zip_code park.zip_code
  json.phone_number park.phone_number
  json.website park.website
  json.image_url asset_path(park.image.url)
  json.tags park.tags
  json.lat park.lat
  json.lng park.lng
  json.num_ratings park.reviews.length

  ratings = []
  park.reviews.each do |review|
    ratings.push(review.rating)
  end
  sum = 1;
  ratings.each do |rating|
    sum += rating
  end
  if (ratings.length > 0)
    avg_rating = ((Float(sum) / Float(ratings.length) * 2).round) / (2.0)
  else
    avg_rating = 0
  end
  json.avg_rating avg_rating
end
