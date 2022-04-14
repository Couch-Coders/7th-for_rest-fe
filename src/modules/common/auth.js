import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
import { call, takeLatest } from 'redux-saga/effects';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');
const LOGOUT = 'user/LOGOUT';

export const login = createAction(LOGIN, ({ token }) => ({
  token,
}));
export const logout = createAction(LOGOUT);
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);

const initialState = {
  user: null,
  auth: null,
  authError: null,
};

const loginSaga = createRequestSaga(LOGIN, authAPI.login);

function* logoutSaga() {
  try {
    localStorage.removeItem('user');
    yield call(authAPI.logout);
  } catch (e) {
    console.log(e);
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const auth = handleActions(
  {
    //로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      authError: null,
      auth: data.token,
      user: data.user,
    }),
    //로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
      auth: null,
    }),
  },
  initialState,
);

export default auth;
