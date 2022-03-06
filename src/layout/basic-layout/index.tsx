import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SiderMenu from './sider';

const { Content } = Layout;

const BasicLayout: React.FC = () => {
  return (
    <Layout>
      <SiderMenu />
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
