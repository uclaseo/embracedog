import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search.jsx';
import RandomDog from './RandomDog.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;
const HelloWorld = () => (
  <Wrapper>
    <div className="hello-world">
      <h1>Welcome to Dog World</h1>
      <Search />
      <RandomDog />
    </div>
  </Wrapper>
);

export default HelloWorld;
