import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import { Wrapper } from '../style/style.js';

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = { image: [] };
  }

  render() {
    return (
      <div className="card">
        <img className="img-fluid dog" alt="Responsive image" src={this.props.dog} />
      </div>
    );
  }
}

Dog.propTypes = {
  dog: string.isRequired
};
export default Dog;
