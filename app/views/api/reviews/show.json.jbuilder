# json.extract! @review, :user_id, :park_id, :body, :rating
debugger

json.@review do
  json.user_id @review.user_id
  json.park_id @review.park_id
  json.body @review.body
  json.rating @review.rating
  # json.park @review.park
end
