class ChangeLikeIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :likes, :user_id
    add_index :likes, :user_id
  end
end
