import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import { BASE_URL } from '@/constants';
import { getDefaultLocale, getLocaleMessage } from '@/hooks/useChangeLocale';
import { useAppContext } from '@/contexts/AppContext';
import BasicLayout from '@/layout/basic-layout';
import EditorLayout from '@/layout/editor-layout';
import NotFound from '@/pages/404';
import Login from '@/pages/login';
import ChartOverview from '@/pages/chart';
import ChartEditor from '@/pages/chart/editor';
import FormOverview from '@/pages/form';

// 获取当前语种及语言包
const locale = getDefaultLocale();
const localeMessage = getLocaleMessage(locale);

const App: React.FC = () => {
  const {
    state: {
      theme: { colorPrimary },
    },
  } = useAppContext();
  return (
    <IntlProvider locale={locale} messages={localeMessage.local}>
      <ConfigProvider
        locale={localeMessage.antd}
        theme={{
          token: {
            colorPrimary,
          },
        }}
      >
        <Router basename={BASE_URL}>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* 列表页 */}
            <Route path="/" element={<BasicLayout />}>
              <Route index element={<Navigate to="/chart" />} />
              <Route path="chart" element={<ChartOverview />} />
              <Route path="form" element={<FormOverview />} />
            </Route>
            {/* 编辑器 */}
            <Route path="/editor" element={<EditorLayout />}>
              <Route path="chart" element={<ChartEditor />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </IntlProvider>
  );
};

export default App;
