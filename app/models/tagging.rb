class Tagging < ApplicationRecord

  belongs_to :park,
    primary_key: :id,
    foreign_key: :park_id,
    class_name: "Park"

  belongs_to :tag,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: "Tag"

end
