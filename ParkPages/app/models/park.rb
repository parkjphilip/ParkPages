class Park < ApplicationRecord
  validates :name, :street, :city, :state, :zip_code,
            :phone_number, presence: true


end
