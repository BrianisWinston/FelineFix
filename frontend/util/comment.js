export const fetchComments = photo => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${photo.id}/comments`
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: `/api/comments/${photo.id}/comments`,
    data: { comment }
  })
);

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`,
  })
)
