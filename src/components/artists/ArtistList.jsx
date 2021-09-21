import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists, search, page, setPage }) => (
  <>
    <section>
      <button onClick={() => setPage()} value="-1">{page - 1}</button>
      <button onClick={() => setPage()} value="1">{page + 1}</button>
    </section>
    <ul>
      {artists.map(artist => (
        <li key={artist.id + search}>
          <Artist artist={artist} />
        </li>
      ))}
    </ul>
  </>
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
  search: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default ArtistList;
