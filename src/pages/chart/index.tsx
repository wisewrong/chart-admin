import React from 'react';
import { Link } from 'react-router-dom';

const ChartOverview: React.FC = () => {
  return (
    <div>
      <div>ChartOverview</div>
      <Link to="/editor/chart">开始编辑</Link>
    </div>
  );
};

export default ChartOverview;
