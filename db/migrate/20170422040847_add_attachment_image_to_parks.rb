class AddAttachmentImageToParks < ActiveRecord::Migration
  def self.up
    change_table :parks do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :parks, :image
  end
end
