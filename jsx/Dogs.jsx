import React, { Component } from 'react';
import Dog from './Dog.jsx';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Wrapper, Button } from '../style/style.js';
import { DOG_BASE_URL } from './apiConstant';
import Loading from '../style/Loading';

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
      .get(`${DOG_BASE_URL}/breed/${breed}/images`)
      .then(response => {
        const random = Math.floor(Math.random() * response.data.message.length - 10);
        for (let i = random; i < random + 12; i++) {
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
    if (this.state.images.length === 0) {
      return (
        <Wrapper>
          <div className="text-center">
            <Loading />
          </div>
        </Wrapper>
      );
    }
    if (this.state.images[0] === 'B' || !this.state.images[0]) {
      return (
        <Wrapper>
          <div className="text-center">
            <div>Breed Not Found. Try Again!</div>
            <Link to="/">
              <Button>Back</Button>
            </Link>{' '}
          </div>
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <div className="dogs">
          <h1 className="text-center">{this.props.searchTerm}</h1>
          <div className="album">
            <div className="container container-inside">
              <div className="row">{this.state.images.map((dog, index) => <Dog key={index} dog={dog} />)}</div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/">
              <Button>Back</Button>
            </Link>
          </div>
        </div>
      </Wrapper>
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
