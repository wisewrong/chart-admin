import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import { getDefaultLocale, getLocaleMessage } from '@/hooks/useChangeLocale';
import App from './app';
import './global.less';

// 获取当前语种及语言包
const locale = getDefaultLocale();
const localeMessage = getLocaleMessage(locale);

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={localeMessage.local}>
      <ConfigProvider locale={localeMessage.antd}>
        <App />
      </ConfigProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
