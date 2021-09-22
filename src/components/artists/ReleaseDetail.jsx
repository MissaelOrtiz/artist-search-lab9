/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSongsById } from '../../services/musicApi';

const ReleaseDetail = () => {
  const { titleC, idC, artistC } = useParams();
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState({});

  useEffect(() => {
    getSongsById(idC)
      .then(songsObj => setSongs(songsObj))
      .then(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>{titleC}</h1>
      <p>Songs in {titleC}:</p>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            <button onClick={() => location.replace(`/songs/${artistC}/${song.title}`)}>{song.title}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReleaseDetail;
