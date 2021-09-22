import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onSearch, onSubmit }) => {
  if(search === '') return (<form onSubmit={onSubmit}>
    <label>
    Find an Artist:
      <input 
        type="text"
        name="searchWord"
        value={search}
        onChange={onSearch}
      />
    </label>
    <button disabled> Submit</button>
  </form>);
  return (<form onSubmit={onSubmit}>
    <label>
    Find an Artist:{''}
      <input 
        type="text"
        name="searchWord"
        value={search}
        onChange={onSearch}
      />
    </label>
    <button aria-label="submit search"> Submit</button>
  </form>);
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
