import React from 'react';
import { Layout, Space } from 'antd';
import ColorPicker from '@/components/color-picker';
import UserInfo from './user-info';

const { Header } = Layout;

const BasicLayoutHeader: React.FC = () => {
  return (
    <Header className="basic-layout-header flex flex-row flex-justify-between">
      <Space className="header-left">
        <ColorPicker />
        <div className="logo">Chart Admin</div>
      </Space>
      <Space className="header-right">
        <UserInfo />
      </Space>
    </Header>
  );
};

export default BasicLayoutHeader;
