import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'searchParam/INITIALIZE';
const CHANGE_PARAM = 'searchParam/CHANGE_PARAM';

export const paramInitialize = createAction(INITIALIZE);
export const onChange = createAction(CHANGE_PARAM, ({ key, value }) => ({
  key,
  value,
}));

const initialState = {
  category: '',
  region_1: '',
  region_2: [],
};

const searchParam = handleActions(
  {
    [INITIALIZE]: (state) => initialState, //initisalState를 넣으면 초기 상태로 바뀜
    [CHANGE_PARAM]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initialState,
);

export default searchParam;
