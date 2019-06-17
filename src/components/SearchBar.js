import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
  }

  onTermChange = (event) => {
    console.log(`Search Term Field updated ${event.target.value}`);
    this.setState({
      term: event.target.value,
    });
    this.props.filterPetsCallback(event.target.value)
  }

  render() {
    return (
      <section className="search-bar">
         <input 
            onChange={this.onTermChange}
            value={this.state.term}
            name="term" 
            type="text" 
            placeholder="Filter Pets"
            className="search-bar" />
      </section>
    );
  }
};

SearchBar.propTypes = {
  filterPetsCallback: PropTypes.func.isRequired,  
};

export default SearchBar;
