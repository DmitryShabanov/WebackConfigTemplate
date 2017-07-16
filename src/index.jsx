import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

const store = createStore(reducer);

const renderApp = () => {
  const Router = require('./containers/Router.jsx').default;
  const component = (
    <Provider store={store}>
      <AppContainer>
        <Router />
      </AppContainer>
    </Provider>
  );
  render(component, document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./containers/Router.jsx', () => renderApp());
}

renderApp();
