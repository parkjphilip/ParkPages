class Addparkidtophotos < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :park_id, :string
  end
end
