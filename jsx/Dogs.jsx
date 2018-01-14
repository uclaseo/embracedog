import React, { Component } from 'react';
import MapDogs from './MapDogs.jsx';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = `https://dog.ceo/api`;

class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.fetchDogImages = this.fetchDogImages.bind(this);
  }
  componentDidMount() {
    this.fetchDogImages(this.props.searchTerm);
  }
  fetchDogImages(breed) {
    axios
      .get(`${URL}/breed/${breed}/images`)
      .then(response => {
        const random = Math.floor(Math.random() * response.data.message.length - 10);
        for (let i = random; i < random + 10; i++) {
          this.setState({
            images: [...this.state.images, response.data.message[i]]
          });
        }
      })
      .catch(error => {
        console.log('(Dogs.jsx) fetchDogImages error: ', error);
      });
  }

  handleSearchTermChange(event) {
    this.props.setSearchTerm(event.target.value);
  }

  render() {
    if (this.state.images[0] === 'B' || !this.state.images[0]) {
      return (
        <div>
          <div>Breed Not Found. Try Again!</div>
          <Link to="/">Back</Link>
        </div>
      );
    }
    return (
      <div className="dogs">
        <Link to="/">Back</Link>
        <h1>{this.props.searchTerm}</h1>
        <div>{this.state.images.map((dog, index) => <MapDogs key={index} dog={dog} />)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setSearchTerm
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);
