import { combineReducers } from 'redux';
import auth, { authSaga } from './common/auth';
import loading from './common/loading';
import { all } from 'redux-saga/effects';
import places, { placesSaga } from './main/places';
import searchParam from './main/searchParam';

const rootReducer = combineReducers({
  auth,
  loading,
  places,
  searchParam,
});

export function* rootSaga() {
  yield all([authSaga(), placesSaga()]);
}

export default rootReducer;
