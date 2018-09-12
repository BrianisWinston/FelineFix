json.photo do
  json.partial! 'api/photos/photo', photo: @comment.photo
  json.oldId @oldcommentid.to_i
end
