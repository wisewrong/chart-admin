import * as Actions from './actions';
import type {
  AppContextState,
  AppContextPayload,
  AppContextAction,
} from './types';

/** 设置主题色 */
const setPrimayrColor = (
  state: AppContextState,
  colorPrimary: string,
): AppContextState => ({
  ...state,
  theme: {
    ...state.theme,
    colorPrimary,
  },
});

// 管理所有处理函数
const handlerMap: {
  [key: string]: (
    state: AppContextState,
    payload: AppContextPayload,
  ) => AppContextState;
} = {
  [Actions.SET_PRIMARY_COLOR]: setPrimayrColor,
};

const reducer = (state: AppContextState, action: AppContextAction) => {
  const { type, payload } = action;
  const handler = handlerMap[type];
  const res = typeof handler === 'function' && handler(state, payload);
  return res || state;
};

export default reducer;
