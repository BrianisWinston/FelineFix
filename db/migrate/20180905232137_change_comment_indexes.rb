class ChangeCommentIndexes < ActiveRecord::Migration[5.1]
  def change
    remove_index :comments, :user_id
    add_index :comments, :user_id
    remove_index :comments, :photo_id
    add_index :comments, :photo_id
  end
end
