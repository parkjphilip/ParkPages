class Addtaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :park_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end
  end
end
