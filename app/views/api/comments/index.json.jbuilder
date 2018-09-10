
@comments.each do |comment|
  json.comment do
    photo = json.partial! 'api/comments/comment', comment: comment
    puts photo
    puts 'hello'
  end
end
