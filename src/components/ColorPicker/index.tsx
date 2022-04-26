import React, { useCallback, useState } from 'react';
import { SketchPicker } from 'react-color';
import { ConfigProvider, Popover } from 'antd';
import { DownOutlined } from '@ant-design/icons';

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
    <Popover trigger="click" placement="bottom" content={picker}>
      <div className="color-picker">
        <DownOutlined />
      </div>
    </Popover>
  );
};

export default ColorPicker;
