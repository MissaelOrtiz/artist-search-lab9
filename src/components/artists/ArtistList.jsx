import React from 'react';
import PropTypes from 'prop-types';

const ArtistList = ({ artists, search }) => (
  <ul>
    {artists.map(artist => (
      <li key={artist.id + search}>
        {artist.name}
        {/* <Artist /> */}
      </li>
    ))}
  </ul>
);

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ),
  search: PropTypes.string.isRequired
};

export default ArtistList;
