class Tag < ApplicationRecord

  has_many :taggings,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: "Tagging"

  has_many :parks,
    through: :taggings,
    source: :park

end
