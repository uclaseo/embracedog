import React, { Component } from 'react';
import axios from 'axios';

const URL = `https://dog.ceo/api`;

export default class RandomDog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      breed: '',
      imageURL: ''
    };
    this.fetchRandomDog = this.fetchRandomDog.bind(this);
    this.renderDog = this.renderDog.bind(this);
  }
  componentDidMount() {
    this.fetchRandomDog();
  }

  fetchRandomDog() {
    axios.get(`${URL}/breeds/image/random`).then(response => {
      this.setState({
        loaded: true,
        breed: response.data.message.split('/')[5],
        imageURL: response.data.message
      });
    });
  }

  renderDog() {
    return (
      <div>
        <img src={this.state.imageURL} />
        <h1>{this.state.breed}</h1>
      </div>
    );
  }

  render() {
    if (this.state.loaded) {
      return this.renderDog();
    }
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
}
