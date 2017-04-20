class Park < ApplicationRecord
  validates :name, :street_name, :city, :state, :zip_code,
            :phone_number, :photo_url, presence: true


end
