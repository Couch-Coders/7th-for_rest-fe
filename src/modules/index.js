import { combineReducers } from 'redux';
import auth, { authSaga } from './common/auth';
import loading from './common/loading';
import { all } from 'redux-saga/effects';
import places, { placesSaga } from './main/places';
import searchParam from './main/searchParam';
import place, { placeSaga } from './detail/place';
import reviews, { reviewsSaga } from './detail/reviews';
import likePlace, { likePlaceSaga } from './myPage/likePlace';

const rootReducer = combineReducers({
  auth,
  loading,
  places,
  searchParam,
  place,
  reviews,
  likePlace,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    placesSaga(),
    placeSaga(),
    reviewsSaga(),
    likePlaceSaga(),
  ]);
}

export default rootReducer;
