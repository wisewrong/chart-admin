import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { BASE_URL } from '@/constants';
import BasicLayout from '@/layout/basic-layout';
import EditorLayout from '@/layout/editor-layout';
import NotFound from '@/pages/404';
import Login from '@/pages/login';
import ChartOverview from '@/pages/chart';
import ChartEditor from '@/pages/chart/editor';
import FormOverview from '@/pages/form';

const App: React.FC = () => {
  return (
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
  );
};

export default App;
