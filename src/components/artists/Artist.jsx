import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ artist }) => {
  const { name, country, id } = artist;
  
  return (
    <button onClick={() => location.replace(`/artists/${id}`)}>
      <h2>{name}</h2>
      <p>{country}</p>
    </button>
  );
};

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string,
    id: PropTypes.string
  })
};

export default Artist;
