import * as ReviewAPIUtil from '../util/review_api_util';
// import { hashHistory } from 'react-router';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";


export const fetchReviews = (currentParkId) => dispatch => {
  return ReviewAPIUtil.fetchReviews(currentParkId)
                      .then(reviews => dispatch(receiveReviews(reviews)));
};

export const createReview = review => dispatch => {
  return ReviewAPIUtil.createReview(review)
                      .then(review => dispatch(receiveReview(review)));
};

export const receiveReviews = reviews => {
  return ({
    type: RECEIVE_REVIEWS,
    reviews
  });
};

export const receiveReview = review => {
  return ({
    type: RECEIVE_REVIEW,
    review
  });
};
