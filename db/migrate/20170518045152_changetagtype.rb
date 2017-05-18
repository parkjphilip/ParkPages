class Changetagtype < ActiveRecord::Migration[5.0]
  def change
    change_column :tags, :tag_name, :string
  end
end
