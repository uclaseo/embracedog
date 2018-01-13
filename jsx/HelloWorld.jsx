import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="hello-world">
    <h1>Hello World</h1>
    <h2>Let's go to Dogs</h2>
    <Link to="/dogs">DOGS</Link>
    <Link to="/details/:id">PATTERN</Link>
  </div>
);

export default Landing;
