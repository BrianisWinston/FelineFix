json.array! @comments do |comment|
  json.id comment.id
  json.photo_id comment.photo_id
  json.user_id comment.user_id
  json.body comment.body
  json.username comment.user.username
end
