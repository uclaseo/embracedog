import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${spin} 4s infinite linear;
  width: 200px;
  height: 200px;
`;

const Loading = () => <Image src="/style/loading.png" alt="loading indicator" />;

export default Loading;
