class DropParks < ActiveRecord::Migration[5.0]
  def change
    drop_table :parks
  end
end
