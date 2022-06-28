# == Schema Information
#
# Table name: questions
#
#  id                 :bigint           not null, primary key
#  body               :text             not null
#  title              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  author_id          :integer          not null
#  parent_question_id :integer
#
# Indexes
#
#  index_questions_on_author_id           (author_id)
#  index_questions_on_parent_question_id  (parent_question_id)
#
class Question < ApplicationRecord
end
