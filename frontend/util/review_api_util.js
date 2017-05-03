export const fetchReviews = (currentParkId) => {
  return $.ajax({
    method: 'get',
    url: `/api/parkreviews/${currentParkId}`,
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: 'post',
    url: `/api/parks/${review.park_id}/reviews`,
    data: {
      review: {
        user_id: review.user_id,
        park_id: review.park_id,
        body: review.body,
        rating: review.rating
      }
    }
  });
};


//
// export const createReview = (review) => (
//   $.ajax({method: 'POST', url: `api/reviews`, data: {review}})
// );
//
// export const updateReview = (review) => (
//   $.ajax({method: 'PATCH', url: `api/reviews/${review.id}`, data: {review, id: review.id}})
// );
//
// export const deleteReview = (id) => (
//   $.ajax({method: 'DELETE', url:`api/reviews/${id}`})
// );
