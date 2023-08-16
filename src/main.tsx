import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContextProvider } from '@/contexts/AppContext';
import App from './app';
import './global.less';

const root = document.getElementById('root') as Element;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);
