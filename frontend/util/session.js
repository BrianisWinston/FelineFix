export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
);

export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);

export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);

export const updateUserPhoto = (img_url) => {
  console.log(img_url);
  return $.ajax({
    url: `/api/users/${ img_url.user_id }`,
    method: 'PATCH',
    data: img_url
  });
}
