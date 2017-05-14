class Removeparkidfromphotos < ActiveRecord::Migration[5.0]
  def change
    remove_column :photos, :park_id, :string
  end
end
