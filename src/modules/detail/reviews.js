import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as reviewAPI from '../../lib/api/review';
import { createRequestActionTypes } from './../../lib/createRequestSaga';

const [READ_REVIEWS, READ_REVIEWS_SUCCESS, READ_REVIEWS_FAILURE] =
  createRequestActionTypes('reviews/READ');
const UPDATE_REVIEWS = 'reviews/UPDATE';
const REMOVE_REVIEWS = 'reviews/REMOVE';

export const readReview = createAction(READ_REVIEWS, ({ placeId }) => ({
  placeId,
}));

export const updateReviewState = createAction(
  UPDATE_REVIEWS,
  ({ reviewId, content, reviewRating, image }) => ({
    reviewId,
    content,
    reviewRating,
    image,
  }),
);

export const removeReviewState = createAction(
  REMOVE_REVIEWS,
  ({ reviewId }) => ({
    reviewId,
  }),
);

const getReviewsSaga = createRequestSaga(READ_REVIEWS, reviewAPI.getReviews);

export function* reviewsSaga() {
  yield takeLatest(READ_REVIEWS, getReviewsSaga);
}

const initialState = {
  reviews: [],
  error: null,
};

const reviews = handleActions(
  {
    [READ_REVIEWS_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      reviews: data.reviews,
    }),
    [READ_REVIEWS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
    [UPDATE_REVIEWS]: (
      state,
      { payload: { reviewId, content, reviewRating, image } },
    ) => ({
      ...state,
      reviews: state.reviews.map((item) =>
        item.id === reviewId
          ? { ...item, content: content, reviewRating, image }
          : item,
      ),
    }),
    [REMOVE_REVIEWS]: (state, { payload: { reviewId } }) => ({
      ...state,
      reviews: state.reviews.filter((item) => item.id !== reviewId),
    }),
  },
  initialState,
);

export default reviews;
