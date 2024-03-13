import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';
import Todos from './Todos';

import './styles/index.css';
import './styles/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Todos />
    </Provider>
  </React.StrictMode>,
);
