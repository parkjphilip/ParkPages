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

export const fetchFeaturedParks = () => {
  return $.ajax({
    method: 'get',
    url: '/api/parks',
    data: {
      park: {
        name: ``
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

export const createPhoto = (data) => {
  debugger
  return $.ajax({
    method: 'post',
    contentType: false,
    processData: false,
    datatype: "json",
    url: `api/parks/1/photos`,
    url: `api/parks/${data.photo.id}/photos`,
    data: {
      photo: {
        park_id: data.photo.id,
        image: data.photo.file
      }
    }
  });
};
