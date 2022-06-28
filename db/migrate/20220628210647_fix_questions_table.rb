class FixQuestionsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :questions, :parent_question_id
  end
end
