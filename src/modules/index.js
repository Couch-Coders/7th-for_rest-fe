import { combineReducers } from 'redux';
import auth, { authSaga } from './common/auth';
import loading from './common/loading';
import { all } from 'redux-saga/effects';
import places, { placesSaga } from './main/places';
import searchParam from './main/searchParam';
import place, { placeSaga } from './detail/place';

const rootReducer = combineReducers({
  auth,
  loading,
  places,
  searchParam,
  place,
});

export function* rootSaga() {
  yield all([authSaga(), placesSaga(), placeSaga()]);
}

export default rootReducer;
