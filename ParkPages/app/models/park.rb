class Park < ApplicationRecord
  include PgSearch
  validates :name, :street, :city, :state, :zip_code,
            :phone_number, presence: true


  has_attached_file :image, styles: { medium: '100x100>', thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  multisearchable :against => [:name]
  pg_search_scope :search_by_park_name, :against => [:name]
end
