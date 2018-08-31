class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end
    add_index :comments, :user_id, unique: true
    add_index :comments, :photo_id, unique: true
  end
end
