class Park < ApplicationRecord
  include PgSearch
  validates :name, :street, :city, :state, :zip_code,
            :phone_number, presence: true


  has_attached_file :image, styles: { medium: '100x100>', thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  # multisearchable :against => [:name, park_tags]
                  # :associated_against => { :tags => :tag_name }
  pg_search_scope :name_search, :against => :name
  pg_search_scope :tag_search, :associated_against => { :tags => :tag_name }

  has_many :taggings,
    primary_key: :id,
    foreign_key: :park_id,
    class_name: "Tagging"

  has_many :tags,
    through: :taggings,
    source: :tag

  has_many :reviews,
    primary_key: :id,
    foreign_key: :park_id,
    class_name: "Review"

end
