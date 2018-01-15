import React from 'react';
import Search from './Search.jsx';
import RandomDog from './RandomDog.jsx';
import { Wrapper } from '../style/style.js';

const HelloWorld = () => (
  <Wrapper className="main col">
    <h1 className="text-center">Welcome to Dog World</h1>
    <Search />
    <RandomDog />
  </Wrapper>
);

export default HelloWorld;
