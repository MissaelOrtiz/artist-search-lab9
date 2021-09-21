import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onSearch, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>
    Find an Artist:{''}
      <input 
        type="text"
        name="searchWord"
        value={search}
        onChange={onSearch}
      />
    </label>
    <button> Submit</button>
  </form>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
