class Addtags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.integer :tag_name, null: false
      t.timestamps
    end
  end
end
