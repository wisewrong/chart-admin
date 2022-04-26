import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sider from './sider';
import Header from './header';
import './index.less';

const { Content } = Layout;

const BasicLayout: React.FC = () => {
  return (
    <Layout className="basic-layout">
      <Header />
      <Layout>
        <Sider />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
