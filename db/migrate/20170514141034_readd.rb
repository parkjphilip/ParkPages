class Readd < ActiveRecord::Migration[5.0]
  def change
    remove_column :photos, :review_id, :integer
    remove_column :reviews, :photo_id, :integer
    add_column :photos, :park_id, :integer
  end
end
