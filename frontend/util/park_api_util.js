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

export const createPhoto = (photo) => {

  return $.ajax({
    method: 'post',
    // contentType: 'application-json',
    contentType: false,
    processData: false,
    url: `api/parks/${photo.get("photo[park_id]")}/photos`,
    // data: { photo }
    data:
    {
      photo: {
        // park_id: photo.park_id,
        // image: photo.image
        // image: photo.get("photo[image]"),
        // park_id: photo.get("photo[park_id]"),
      }
    }
  });
};
