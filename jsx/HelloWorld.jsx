import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search.jsx';
import RandomDog from './RandomDog.jsx';

const HelloWorld = () => (
  <div className="hello-world">
    <h1>Welcome to Dog World</h1>
    <Search />
    <RandomDog />
    <Link to="/dogs">DOGS</Link>
  </div>
);

export default HelloWorld;
