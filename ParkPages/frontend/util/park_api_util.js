export const fetchParks = () => {
  return $.ajax({
    method: 'get',
    url: '/api/parks'
  });
};

export const fetchPark = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/parks/${id}`
  });
};
