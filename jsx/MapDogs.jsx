import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';
import axios from 'axios';

const URL = `https://dog.ceo/api/`;

class MapDogs extends Component {
  constructor(props) {
    super(props);
    this.state = { image: [] };

    this.fetchRandomDogImage = this.fetchRandomDogImage.bind(this);
  }
  componentDidMount() {
    this.fetchRandomDogImage();
  }

  fetchRandomDogImage() {
    axios.get(`${URL}breeds/image/random`).then(response => {
      this.setState({ image: [...this.state.image, response.data.message] });
      console.log(this.state.image);
    });
  }
  render() {
    const { type, name, age } = this.props.dog;
    return (
      <div className="mapping-dogs">
        <div className="mapped-type">type is : {this.props.dog.type}</div>
        <div className="mapped-name">name is : {this.props.dog.name}</div>
        <div className="mapped-age">age is : {this.props.dog.age}</div>
        <div>===========================</div>
        <img src={this.state.image} />
      </div>
    );
  }
}

MapDogs.propTypes = {
  dog: shape({
    type: string.isRequired,
    name: string.isRequired,
    age: number.isRequired
  }).isRequired
};

export default MapDogs;
