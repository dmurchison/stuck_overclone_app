# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#
# Indexes
#
#  index_questions_on_author_id  (author_id)
#
class Question < ApplicationRecord
  
  validates :title, :author_id, presence: true
  validates :body, presence: true, length: { minimum: 25 }

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  # has_many :answers, 
  #   class_name: :Answer, 
  #   foreign_key: :question_id

  # has_many :comments,
  #   class_name: :Comment,
  #   foreign_key: :question_id

  # has_many :votes,
  #   class_name: :Vote,
  #   foreign_key: :question_id

end
