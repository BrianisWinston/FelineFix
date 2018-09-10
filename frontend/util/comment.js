export const fetchComments = photoId => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${photoId}/comments`,
    data: {photoId}
  })
);

export const createComment = comment => {
  console.log(comment);
  return $.ajax({
    method: 'POST',
    url: `/api/photos/${comment.photoId}/comments`,
    data: { comment }
  });
};

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`,
  })
)
