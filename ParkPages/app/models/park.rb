class Park < ApplicationRecord
  validates :name, :street, :city, :state, :zip_code,
            :phone_number, presence: true


  has_attached_file :image, styles: { medium: '100x100>', thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :taggings,
    primary_key: :id,
    foreign_key: :park_id,
    class_name: "Tagging"

  has_many :tags,
    through: :taggings,
    source: :tag

end
