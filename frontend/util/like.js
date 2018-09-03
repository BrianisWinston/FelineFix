export const addLike = photo_id => {
  console.log('add like ajax');
  return $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: { photo_id }
  })
};

export const deleteLike = photo_id => {
  console.log('delete like ajax');
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${photo_id}`,
    data: { photo_id }
  })
};
