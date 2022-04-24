import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as placeAPI from '../../lib/api/place';
import { takeLatest } from 'redux-saga/effects';

const [READ_PLACE, READ_PLACE_SUCCESS, READ_PLACE_FAILURE] =
  createRequestActionTypes('detail/INFO');

const UPDATE_LIKE_COUNT = createRequestActionTypes('detail/LIKE_COUNT');
const INITIALIZE = 'detail/INITIALIZE';

export const getPlace = createAction(READ_PLACE, ({ placeId }) => ({
  placeId,
}));

export const updateLikeCount = createAction(
  UPDATE_LIKE_COUNT,
  ({ likeCount }) => ({
    likeCount,
  }),
);

const initialState = {
  place: {},
  error: null,
};

export const placeInitialize = createAction(INITIALIZE);

const detailPlaceSaga = createRequestSaga(READ_PLACE, placeAPI.getPlace);

export function* placeSaga() {
  yield takeLatest(READ_PLACE, detailPlaceSaga);
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
    [UPDATE_LIKE_COUNT]: (state, { payload: { likeCount } }) => ({
      ...state,
      place: { ...state.place, likeCount: likeCount },
    }),
  },
  initialState,
);

export default place;
