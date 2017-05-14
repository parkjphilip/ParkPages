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
        rating: review.rating,
      }
    }
  });
};
