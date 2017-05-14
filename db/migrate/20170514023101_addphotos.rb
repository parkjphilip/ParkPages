class Addphotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
        t.string :image_url, null: false
        t.string :image_file, null: false
      t.timestamps
    end
  end
end
