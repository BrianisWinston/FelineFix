export const createPhoto = photo => (
  $.ajax({
    url: '/api/photos',
    method: 'POST',
    data: { photo }
  })
);

export const deletePhoto = id => {
  return $.ajax({
    url: `/api/photos/${id}`,
    method: 'DELETE',
  })
};

export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const updatePhoto = photo => (
  $.ajax({
    url: `api/posts/${photo.id}`,
    method: 'PATCH',
    data: { photo }
  })
);
