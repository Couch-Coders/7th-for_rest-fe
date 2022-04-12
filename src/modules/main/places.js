import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as placesAPI from '../../lib/api/places';
import { takeLatest } from 'redux-saga/effects';

const [SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE] =
  createRequestActionTypes('places/SEARCH');

export const serach = createAction(
  SEARCH,
  ({ category, region_1, region_2 }) => ({
    category,
    region_1,
    region_2,
  }),
);

const initialState = {
  places: null,
  error: null,
};

const searchSaga = createRequestSaga(SEARCH, placesAPI.searchByTag);

export function* placesSaga() {
  yield takeLatest(SEARCH, searchSaga);
}

const places = handleActions(
  {
    //로그인 성공
    [SEARCH_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      places: data,
    }),
    //로그인 실패
    [SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
  },
  initialState,
);

export default places;
