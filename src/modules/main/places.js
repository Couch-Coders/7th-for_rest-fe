import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as placesAPI from '../../lib/api/places';
import { takeLatest } from 'redux-saga/effects';

const [GET_LIST_PLACES, GET_LIST_PLACES_SUCCESS, GET_LIST_PLACES_FAILURE] =
  createRequestActionTypes('places/SEARCH');
const INITIALIZE = 'places/INITIALIZE';

export const getPlaces = createAction(
  GET_LIST_PLACES,
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
  totalElements: 0,
  error: null,
};

export const placesInitialize = createAction(INITIALIZE);

const listPlacesSaga = createRequestSaga(GET_LIST_PLACES, placesAPI.getPlaces);

export function* placesSaga() {
  yield takeLatest(GET_LIST_PLACES, listPlacesSaga);
}

const places = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [GET_LIST_PLACES_SUCCESS]: (
      state,
      { payload: { content, totalPages, totalElements } },
    ) => ({
      ...state,
      places: content,
      totalPages: totalPages,
      totalElements: totalElements,
    }),
    [GET_LIST_PLACES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
  },
  initialState,
);

export default places;
