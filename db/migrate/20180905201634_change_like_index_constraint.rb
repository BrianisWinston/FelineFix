class ChangeLikeIndexConstraint < ActiveRecord::Migration[5.1]
  def change
    remove_index :likes, :photo_id
    add_index :likes, :photo_id
  end
end
