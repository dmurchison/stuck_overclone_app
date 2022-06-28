json.extract! question, :id, :title, :body, :author_id, :created_at, :updated_at
json.author_name post.author.username
json.comments post.comment_id
json.votes post.votes.count
json.