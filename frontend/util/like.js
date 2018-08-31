export const addLike = photo_id => {
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: { photo_id }
  });
};

export const deleteLike = photo_id => {
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${photo_id}`
  });
};
