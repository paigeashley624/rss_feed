class AddEntryIdToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :entry_id, :integer
  end
end
