import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArtistById } from '../../services/musicApi';

const ArtistDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [artist, setArtist] = useState({});

  useEffect(() => {
    getArtistById(id)
      .then(artistObj => setArtist(artistObj))
      .then(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>{artist.name}</h1>
      <p>Country:{artist.country}</p>
      <p>Type: {artist.type}</p>
      <p>Active: {artist.begin} - {artist.end}</p>
    </>
  );
};

export default ArtistDetail;
