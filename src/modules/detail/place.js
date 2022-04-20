import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as placeAPI from '../../lib/api/place';
import { takeLatest } from 'redux-saga/effects';

const [DETAIL_PLACE, DETAIL_PLACE_SUCCESS, DETAIL_PLACE_FAILURE] =
  createRequestActionTypes('detail/INFO');
const INITIALIZE = 'detail/INITIALIZE';

export const getPlace = createAction(DETAIL_PLACE, ({ id }) => ({ id }));

const initialState = {
  place: {},
  reivew: [],
  error: null,
};

export const placeInitialize = createAction(INITIALIZE);

const detailPlaceSaga = createRequestSaga(DETAIL_PLACE, placeAPI.getPlace);

export function* placeSaga() {
  yield takeLatest(DETAIL_PLACE, detailPlaceSaga);
}

const place = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [DETAIL_PLACE_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      place: data,
    }),
    [DETAIL_PLACE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
  },
  initialState,
);

export default place;
