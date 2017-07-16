import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import App from './App';
import About from './../components/About';

const Router = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </HashRouter>
);

export default Router;
