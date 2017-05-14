class Add < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :photo_id, :integer
  end
end
