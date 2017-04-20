class AddParks < ActiveRecord::Migration[5.0]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.string :phone_number, null: false
      t.string :website
      t.string :photo_url
      t.timestamps
    end

    add_index :parks, :name
  end
end
