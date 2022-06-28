class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :parent_question_id
      t.timestamps
    end
    add_index :questions, :author_id
    add_index :questions, :parent_question_id
    #Ex:- add_index("admin_users", "username")
  end
end
