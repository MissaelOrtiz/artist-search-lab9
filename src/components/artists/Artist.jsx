import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ artist }) => {
  const { name, type, id, country } = artist;
  
  return (
    <>
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{country}</p>
      <p>{id}</p>
    </>
  );
};

Artist.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    country: PropTypes.string,
  })
};

export default Artist;
