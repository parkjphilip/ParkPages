// export const fetchParks = () => {
//   return $.ajax({
//     method: 'get',
//     url: '/api/parks'
//   });
// };

export const fetchParks = (query) => {
  return $.ajax({
    method: 'get',
    url: '/api/parks',
    data: {
      park: {
        name: `${query}`
      }
    }
  });
};

export const fetchPark = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/parks/${id}`
  });
};
