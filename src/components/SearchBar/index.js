import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onChange}) => (
  <div className="container-search-bar">
    <input type="search" autoComplete="true" />
  </div>
);

SearchBar.PropTypes = {

}

export default SearchBar;