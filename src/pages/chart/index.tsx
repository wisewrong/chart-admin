import React from 'react';
import { Link } from 'react-router-dom';
import Demo from './components/Demo';

const ChartOverview: React.FC = () => {
  return (
    <div>
      <div>ChartOverview</div>
      <Demo />
      <Link to="/editor/chart">开始编辑</Link>
    </div>
  );
};

export default ChartOverview;
