class Dropintegerrating < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :rating
  end
end
