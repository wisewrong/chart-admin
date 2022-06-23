import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import './index.less';

const { Content } = Layout;

const BasicLayout: React.FC = () => {
  return (
    <Layout className="editor-layout">
      <div>wisewrong</div>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default BasicLayout;
