@questions.each do |question|
  json.set! question.id do
    json.id question.id
    json.title question.title
    json.body question.body
    json.author_id question.author_id
  end
end
