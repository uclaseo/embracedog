import React, { Component } from 'react';

const Pattern = props => (
  <div>
    <div>THIS IS PATTERN</div>
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  </div>
);

export default Pattern;
