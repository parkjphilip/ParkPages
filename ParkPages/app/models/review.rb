class Review < ApplicationRecord

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :park,
    primary_key: :id,
    foreign_key: :park_id,
    class_name: "Park"
    
end
