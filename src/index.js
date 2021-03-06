import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import { Provider } from 'react-redux';
import { tempSetUser } from './modules/common/auth';
import { client } from './lib/api/clients';
import { HelmetProvider } from 'react-helmet-async';

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (user === 'null') {
      return;
    }
    const currentLoginTime = localStorage.getItem('loginTime');
    if (new Date().getTime() - currentLoginTime > 1000 * 60 * 60) {
      return;
    }

    const token = localStorage.getItem('token');
    client.defaults.headers.Authorization = `${token}`;
    store.dispatch(tempSetUser(JSON.parse(user)));
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
