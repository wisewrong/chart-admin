import React, { createContext, useReducer, useContext, useEffect } from 'react';
import type { FC, ReactElement, Dispatch } from 'react';
import reducer from './reducer';
import type { AppContextState, AppContextAction } from './types';
import * as Actions from './actions';

const initState: AppContextState = {
  theme: {
    colorPrimary: '#1890ff',
  },
};

const AppContext = createContext(
  {} as {
    state: AppContextState;
    dispatch: Dispatch<AppContextAction>;
  },
);

const AppContextProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };

  // 主题色变化时，设置CSS变量
  useEffect(() => {
    const color = state.theme.colorPrimary;
    // --primary-color 为固定值, 对应 default.less 中的 @primary-color
    document.body.style.setProperty('--primary-color', color);
  }, [state.theme.colorPrimary]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export { AppContext, AppContextProvider, useAppContext, Actions };
