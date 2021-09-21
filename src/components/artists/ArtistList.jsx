import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists, search }) => (
  <ul>
    {artists.map(artist => (
      <li key={artist.id + search}>
        <Artist artist={artist} />
      </li>
    ))}
  </ul>
);

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      name: PropTypes.string.isRequired,
      country: PropTypes.string,
    })
  ),
  search: PropTypes.string.isRequired
};

export default ArtistList;
