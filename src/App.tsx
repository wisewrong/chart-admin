import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BASE_URL } from '@/constants';
import BasicLayout from '@/layout/basic-layout';
import NotFound from '@/pages/404';
import Login from '@/pages/login';
import HomePage from '@/pages/home';
import ChartOverview from '@/pages/chart';
import FormOverview from '@/pages/form';

const App: React.FC = () => {
  return (
    <Router basename={BASE_URL}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/chart" element={<ChartOverview />} />
          <Route path="/form" element={<FormOverview />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
