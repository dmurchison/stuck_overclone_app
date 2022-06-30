@questions.each do |question|
  json.set! question.id do
    json.id question.id
    json.author_id question.author_id
    json.title question.title
    json.body question.body
    json.answers question.answers
  end
end
