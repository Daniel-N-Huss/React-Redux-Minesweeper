import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import store from './helpers/redux/store'
import App from './App';

import { createStore } from 'redux';
import rootReducer from './helpers/redux/reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
