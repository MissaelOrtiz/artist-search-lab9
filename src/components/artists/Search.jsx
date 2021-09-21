import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onSearch }) => (
  <label>
    Find an Artist:{''}
    <input 
      type="text"
      name="searchWord"
      value={search}
      onChange={onSearch}
    />
  </label>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Search;
