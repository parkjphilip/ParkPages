export const fetchParks = () => {
  return $.ajax({
    method: 'get',
    url: '/api/parks'
  });
};

// export const fetchParks = (query) => {
//   return $.ajax({
//     method: 'get',
//     url: '/api/parks',
//     data: {
//       parks: {
//         name: `${query}`
//       }
//     }
//   });
// };

export const fetchPark = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/parks/${id}`
  });
};
