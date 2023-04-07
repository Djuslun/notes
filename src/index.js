import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { reducer } from './redux/reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.scss';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);