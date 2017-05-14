class Changephotorelationtoreview < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :review_id, :integer
    remove_column :photos, :park_id, :string
  end
end
