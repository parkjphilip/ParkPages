export const fetchReviews = (currentParkId) => {

  return $.ajax({
    method: 'get',
    url: `/api/parkreviews/${currentParkId}`,
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
