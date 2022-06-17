import React, { useCallback, useState } from 'react';
import { SketchPicker } from 'react-color';
import { ConfigProvider, Popover } from 'antd';
import './index.less';

const ColorPicker: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState();

  // 切换主题色
  const onPrimaryColorChange = useCallback(({ hex }) => {
    setPrimaryColor(hex);
    ConfigProvider.config({
      theme: {
        primaryColor: hex,
      },
    });
  }, []);

  const picker = <SketchPicker color={primaryColor} onChange={onPrimaryColorChange} />;

  return (
    <Popover
      trigger="hover"
      placement="bottom"
      content={picker}
      overlayClassName="color-picker-overlay"
    >
      <div className="color-picker cursor-pointer" />
    </Popover>
  );
};

export default ColorPicker;
