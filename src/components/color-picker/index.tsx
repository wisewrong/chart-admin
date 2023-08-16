import React, { useCallback } from 'react';
import { ColorPicker as AntColorPicker } from 'antd';
import type { Color } from 'antd/es/color-picker';
import { useAppContext, Actions } from '@/contexts/AppContext';
import './index.less';

const ColorPicker: React.FC = () => {
  const { state, dispatch } = useAppContext();

  // 切换主题色
  const onPrimaryColorChange = useCallback(
    (color: Color) => {
      console.log('color', color.toHexString());
      dispatch({
        type: Actions.SET_PRIMARY_COLOR,
        payload: color.toHexString(),
      });
    },
    [dispatch],
  );

  return (
    <AntColorPicker
      value={state.theme?.colorPrimary}
      onChangeComplete={onPrimaryColorChange}
      trigger="click"
      placement="bottomRight"
    >
      <div className="color-picker cursor-pointer" />
    </AntColorPicker>
  );
};

export default React.memo(ColorPicker);
