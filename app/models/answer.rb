# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  body        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  author_id   :integer          not null
#  question_id :integer          not null
#
# Indexes
#
#  index_answers_on_author_id    (author_id)
#  index_answers_on_body         (body)
#  index_answers_on_question_id  (question_id)
#
class Answer < ApplicationRecord

  include Votable

  validates :body, presence: true, length: { minimum: 25 }
  validates :author_id, presence: true
  
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :question,
    class_name: :Question,
    foreign_key: :question_id

end
