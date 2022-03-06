import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import App from './app';
import './global.less';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
