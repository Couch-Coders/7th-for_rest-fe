import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as placesAPI from '../../lib/api/places';
import { takeLatest } from 'redux-saga/effects';

const [SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE] =
  createRequestActionTypes('places/SEARCH');
const INITIALIZE = 'places/INITIALIZE';

export const serach = createAction(
  SEARCH,
  ({ page, category, region_1, region_2 }) => ({
    page,
    category,
    region_1,
    region_2,
  }),
);

const initialState = {
  places: [],
  totalPages: 0,
  error: null,
};

export const placesInitialize = createAction(INITIALIZE);

const searchSaga = createRequestSaga(SEARCH, placesAPI.searchByTag);

export function* placesSaga() {
  yield takeLatest(SEARCH, searchSaga);
}

const places = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [SEARCH_SUCCESS]: (state, { payload: { content, totalPages } }) => ({
      ...state,
      places: content,
      totalPages: totalPages,
    }),
    [SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
  },
  initialState,
);

export default places;
