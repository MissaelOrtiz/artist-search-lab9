/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSongLyrics } from '../../services/musicApi';

const Song = () => {
  const { titleC, artistC } = useParams();
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    getSongLyrics(artistC, titleC)
      .then(lyricsStr => setLyrics(lyricsStr))
      .then(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
  if(!lyrics) return <h1>No lyrics for this song found!</h1>;
  return (
    <>
      <span>{lyrics}</span>
    </>
  );
};

export default Song;
