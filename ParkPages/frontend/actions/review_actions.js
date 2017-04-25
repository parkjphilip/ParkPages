import * as ReviewAPIUtil from '../util/review_api_util';
// import { hashHistory } from 'react-router';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";


export const fetchReviews = (currentParkId) => dispatch => {

  return ReviewAPIUtil.fetchReviews(currentParkId)
                      .then(reviews => dispatch(receiveReviews(reviews)));
};

export const receiveReviews = reviews => {
  return ({
    type: RECEIVE_REVIEWS,
    reviews
  });
};
