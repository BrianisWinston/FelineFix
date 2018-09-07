export const fetchComments = photo => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${photo.id}/comments`
  });
);

export const createComments = photo => (
  $.ajax({
    method: 'POST',
    url: `/api/comments/${photo.id}/comments`,
    data: {
      body: {photo.body}
    }
  });
);

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`,
  })
)
