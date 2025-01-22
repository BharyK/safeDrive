import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Toaster from './components/toaster/toaster';
import GlobalLoader from './components/globalLoader'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalLoader/>
      <Toaster/>
      <App />
    </Provider>
  </React.StrictMode>
);
