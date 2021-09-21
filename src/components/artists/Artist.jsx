import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ artist }) => {
  const { name, country } = artist;
  
  return (
    <>
      <h2>{name}</h2>
      <p>{country}</p>
    </>
  );
};

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string,
  })
};

export default Artist;
