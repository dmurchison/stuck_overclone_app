# SearchBar Feature
json.array!(@questions) do |question|
  json.id question.id
  json.author_id question.author_id
  json.title question.title
  json.body question.body
  json.votes question.votes
  json.answers question.answers
end

