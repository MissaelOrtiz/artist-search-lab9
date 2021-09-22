/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ release, onError, artist }) => {
  const { title, date, image, id } = release;
  
  return (
    <button onClick={() => location.replace(`/releases/${artist}/${title}/${id}`)}>
      <img src={image} alt={title + ' cover art'} width={'100'} onError={onError}/>
      <p>{title}</p>
      <p>{date}</p>
    </button>
  );
};

Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
  }),
  onError: PropTypes.func.isRequired,
  artist: PropTypes.string.isRequired
};

export default Release;
