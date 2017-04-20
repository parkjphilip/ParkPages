export const fetchParks = () => {
  return $.ajax({
    method: 'get',
    url: '/api/parks'
  });
};

export const fetchPark = (park) => {
  return $.ajax({
    method: 'get',
    url: `/api/park/${park.id}`
  });
};
