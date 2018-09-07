export const fetchComments = (photo) => (
  $.ajax({
    method: 'GET',
    url: 'api/photos/'
  });
);
