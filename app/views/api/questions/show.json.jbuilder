json.question do
  json.partial! "/api/questions/question", question: @question
end

json.authors do
  json.set! @question.author.id do
    
  end
end