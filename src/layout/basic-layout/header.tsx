import React from 'react';
import { Layout } from 'antd';
import ColorPicker from '@/components/ColorPicker';

const { Header } = Layout;

const BasicLayoutHeader: React.FC = () => {
  return (
    <Header className="basic-layout-header">
      {/* <div>wisewrong</div> */}
      <ColorPicker />
    </Header>
  );
};

export default BasicLayoutHeader;
