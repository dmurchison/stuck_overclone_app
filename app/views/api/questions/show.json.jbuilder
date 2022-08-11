json.question do
  json.partial! "/api/questions/question", question: @question
end

json.authors do
  json.set! @question.author.id do
    json.extract! @question.author, :id, :username
  end
end

json.votes do
  @question.votes.each do |vote|
    json.set! vote.id do
      json.userId vote.user_id
      json.voteableId vote.votable_id
      json.votableType vote.votable_type
      json.numVotes vote.num_votes
    end
  end
end