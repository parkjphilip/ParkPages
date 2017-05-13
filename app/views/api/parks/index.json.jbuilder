json.array! @parks do |park|
  debugger
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
