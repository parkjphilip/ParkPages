class Photo < ApplicationRecord

  belongs_to :park,
    primary_key: :id,
    foreign_key: :park_id,
    class_name: "Park"

end
