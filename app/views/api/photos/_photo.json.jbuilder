json.extract! photo, :id, :caption, :img_url, :user_id
json.username photo.user.username

json.people_liked photo.people_liked.map(&:username)
