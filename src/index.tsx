import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Inspector } from 'react-dev-inspector';
import { Router } from './router';
import store from './store';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Inspector>
        <Provider store={store}>
          <Router />
        </Provider>
      </Inspector>
    </React.StrictMode>,
  );
}
