class Addfloatrating < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :rating, :float
  end
end
