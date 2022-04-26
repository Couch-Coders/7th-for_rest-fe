import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as placesAPI from '../../lib/api/places';
import { takeLatest } from 'redux-saga/effects';

const [GET_LIKE_PLACE, GET_LIKE_PLACE_SUCCESS, GET_LIKE_PLACE_FAILURE] =
  createRequestActionTypes('myPage/getPlace');
const REMOVE_LIKE_PLACE = 'myPage/removePlace';

const INITIALIZE = 'myPage/INITIALIZE';

export const getLikePlace = createAction(GET_LIKE_PLACE, () => ({}));
export const removeLikePlace = createAction(
  REMOVE_LIKE_PLACE,
  ({ placeId }) => ({ placeId }),
);

const initialState = {
  places: [],
  totalPlaces: 0,
  error: null,
};

export const placeInitialize = createAction(INITIALIZE);

const getLikePlaceSaga = createRequestSaga(
  GET_LIKE_PLACE,
  placesAPI.getLikePlaces,
);

export function* likePlaceSaga() {
  yield takeLatest(GET_LIKE_PLACE, getLikePlaceSaga);
}

const likePlace = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [GET_LIKE_PLACE_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      places: data.data.content,
      totalPlaces: data.count,
    }),
    [GET_LIKE_PLACE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
    [REMOVE_LIKE_PLACE]: (state, { payload: { placeId } }) => ({
      ...state,
      places: state.places.filter((item) => item.id !== placeId),
    }),
  },
  initialState,
);

export default likePlace;
