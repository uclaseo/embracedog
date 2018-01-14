import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  float: left;
`;
const URL = `https://dog.ceo/api/`;

class MapDogs extends Component {
  constructor(props) {
    super(props);
    this.state = { image: [] };
  }

  render() {
    return (
      <Wrapper>
        <div className="mapping-dogs">
          <Image src={this.props.dog} />
        </div>
      </Wrapper>
    );
  }
}

MapDogs.propTypes = {
  dog: string.isRequired
};
export default MapDogs;
