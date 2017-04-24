class DropPgSearch < ActiveRecord::Migration[5.0]
  def up
    drop_table :pg_search_documents
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
