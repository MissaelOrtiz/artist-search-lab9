/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSongsById } from '../../services/musicApi';

const Song = () => {
  const { titleC, artistC } = useParams();
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState({});

  // useEffect(() => {
  //   getSongsById(idC)
  //     .then(songsObj => setSongs(songsObj))
  //     .then(() => setLoading(false));
  // }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <p>hello</p>
    </>
  );
};

export default Song;
