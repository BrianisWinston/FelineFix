class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :img_url, null: false
      t.string :caption, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :photos, :user_id, unique: true
  end
end
