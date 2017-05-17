
json.array! @reviews do |review|
  json.user_id review.user_id
  json.park_id review.park_id
  json.body review.body
  json.rating review.rating
  json.author review.author.username
  json.park review.park.name
  json.date review.created_at
end
