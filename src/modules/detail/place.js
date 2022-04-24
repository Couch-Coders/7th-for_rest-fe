import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as placeAPI from '../../lib/api/place';
import { takeLatest } from 'redux-saga/effects';

const [READ_PLACE, READ_PLACE_SUCCESS, READ_PLACE_FAILURE] =
  createRequestActionTypes('detail/INFO');

const [GET_LIKE_COUNT, GET_LIKE_COUNT_SUCCESS, GET_LIKE_COUNT_FAILURE] =
  createRequestActionTypes('detail/LIKE_COUNT');
const INITIALIZE = 'detail/INITIALIZE';

export const getPlace = createAction(READ_PLACE, ({ placeId }) => ({
  placeId,
}));

export const getLikeCount = createAction(GET_LIKE_COUNT, ({ placeId }) => ({
  placeId,
}));

const initialState = {
  place: {},
  error: null,
};

export const placeInitialize = createAction(INITIALIZE);

const detailPlaceSaga = createRequestSaga(READ_PLACE, placeAPI.getPlace);
const likeCountSaga = createRequestSaga(GET_LIKE_COUNT, placeAPI.getPlace);

export function* placeSaga() {
  yield takeLatest(READ_PLACE, detailPlaceSaga);
  yield takeLatest(GET_LIKE_COUNT, likeCountSaga);
}

const place = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [READ_PLACE_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      place: data,
    }),
    [READ_PLACE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
    [GET_LIKE_COUNT_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      place: { ...state.place, likeCount: data.likeCount },
    }),
    [GET_LIKE_COUNT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
  },
  initialState,
);

export default place;
