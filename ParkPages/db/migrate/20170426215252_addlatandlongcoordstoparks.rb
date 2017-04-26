class Addlatandlongcoordstoparks < ActiveRecord::Migration[5.0]
  def change
    add_column :parks, :lat, :float
    add_column :parks, :lng, :float
  end
end
