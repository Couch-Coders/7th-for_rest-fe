import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as placesAPI from '../../lib/api/places';
import { takeLatest } from 'redux-saga/effects';

const [LIST_PLACES, LIST_PLACES_SUCCESS, LIST_PLACES_FAILURE] =
  createRequestActionTypes('places/SEARCH');
const INITIALIZE = 'places/INITIALIZE';

export const getPlaces = createAction(
  LIST_PLACES,
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

const listPlacesSaga = createRequestSaga(LIST_PLACES, placesAPI.getPlaces);

export function* placesSaga() {
  yield takeLatest(LIST_PLACES, listPlacesSaga);
}

const places = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [LIST_PLACES_SUCCESS]: (state, { payload: { content, totalPages } }) => ({
      ...state,
      places: content,
      totalPages: totalPages,
    }),
    [LIST_PLACES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
  },
  initialState,
);

export default places;
