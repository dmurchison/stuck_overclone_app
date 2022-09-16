@questions.each do |question|
  json.set! question.id do
      json.id question.id
      json.author_id question.author_id
      json.title question.title
      json.body question.body
      json.created_at question.created_at
      json.updated_at question.updated_at
      json.votes question.votes
      json.answers question.answers
  end
end
# json.authors do
#   @users.each do |user|
#     json.set! user.id do
#       json.partial! "api/users/user", user: user
#     end
#   end
# end

# json.votes do
#   @questions.each do |question|
#     question.votes.each do |vote|
#       json.set! vote.id do
#         json.userId vote.user_id
#         json.voteableId vote.votable_id
#         json.votableType vote.votable_type
#         json.numVotes vote.votes_number
#       end
#     end
#   end
# end

