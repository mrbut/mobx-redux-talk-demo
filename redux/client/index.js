import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import App from './App';

const store = createStore(reducers, composeWithDevTools());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
