json.question do
  json.partial! "/api/questions/question", question: @question
end

json.author do
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
      json.numVotes vote.votes_number
    end
  end
end

json.answers do
  @question.answers.each do |answer|
      json.set! answer.id do
          json.extract! answer, :id, :author_id, :question_id, :body, :created_at
          json.extract! answer.author, :username
          json.votes do 
          answer.votes.each do |vote|
            json.set! vote.id do
              json.userId vote.user_id
              json.votableId vote.votable_id
              json.votableType vote.votable_type
              json.numVotes vote.votes_number
            end
          end
        end
      end
  end
end

