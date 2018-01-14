import React, { Component } from 'react';
import { setSearchTerm } from './actionCreators.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleSearchTermChange(event) {
    this.props.setSearchTerm(event.target.value);
  }
  handleOnClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        {this.props.searchTerm}
        <input
          onChange={this.handleSearchTermChange}
          value={this.props.searchTerm}
          type="text"
          placeholder="type dog breed"
        />
        <Link to="/dogs">Search</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setSearchTerm
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
