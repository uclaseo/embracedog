import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';
import axios from 'axios';

const URL = `https://dog.ceo/api/`;

class MapDogs extends Component {
  constructor(props) {
    super(props);
    this.state = { image: [] };
  }

  render() {
    return (
      <div className="mapping-dogs">
        <img src={this.props.dog} />
        <div>===========================</div>
      </div>
    );
  }
}

MapDogs.propTypes = {
  dog: string.isRequired
};
export default MapDogs;
