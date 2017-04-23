json.array! @parks, :id, :name, :street, :city, :state, :zip_code, :phone_number, :website, :photo_url

json.parks do
  json.array!(@search_results[:parks]) do |park|
    json.id park.id
    json.name park.name
    json.street park.street
    json.city park.city
    json.state park.state
    json.zip_code park.zip_code
    json.phone_number park.phone_number
    json.website park.website
    json.photo_url park.photo_url
    json.image_url park.image.url
  end
end
