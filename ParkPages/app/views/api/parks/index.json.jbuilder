# json.extract! @parks, :name, :street, :city,
# :state, :zip_code, :phone_number, :website, :photo_url
#
# @parks.each do |park|
#   json.set! business.id do
#     json.extract! business, :id, :name, :photo_url, :lat_coordinate,
#       :long_coordinate, :price, :rating
#   end
# end

json.array! @parks, :id, :name, :street, :city, :state, :zip_code, :phone_number, :website, :photo_url
