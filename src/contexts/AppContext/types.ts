import * as Actions from './actions';

export type ThemeType = {
  colorPrimary: string;
};

/** 全局应用状态 */
export type AppContextState = {
  theme: ThemeType;
};

export type AppContextPayload = any;

export type AppContextAction = {
  type: ValueOf<typeof Actions>;
  payload: AppContextPayload;
};
