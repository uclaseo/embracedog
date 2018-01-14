import React, { Component } from 'react';
import { setSearchTerm } from './actionCreators.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleSearchTermChange(event) {
    this.props.setSearchTerm(event.target.value);
  }
  handleEnter(event) {
    if (event.key === 'Enter') {
      this.setState({
        redirect: true
      });
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/dogs" />;
    }
    return (
      <div>
        <input
          onKeyPress={this.handleEnter}
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
