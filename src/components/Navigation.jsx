import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/navigation.scss';

const Navigation = () => (
  <div>
    <Link className="link" to="/">Main</Link>
    <Link className="link" to="/about">About</Link>
  </div>
);

export default Navigation;
