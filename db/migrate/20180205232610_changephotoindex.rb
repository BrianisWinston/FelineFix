class Changephotoindex < ActiveRecord::Migration[5.1]
  def change
    remove_index :photos, :user_id
    add_index :photos, :user_id
  end
end
