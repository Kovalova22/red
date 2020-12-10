import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import Modal from './redux/modalReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
      combineReducers({
          hotdogs: reducer,
          modal: Modal
      }),
      applyMiddleware(thunk, logger)
  );

  return store;
}
const store = ConfigureStore();

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

