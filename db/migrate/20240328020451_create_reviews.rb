class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :content
      t.string :author
      t.integer :score
      t.datetime :submission_time

      t.timestamps
    end
  end
end
