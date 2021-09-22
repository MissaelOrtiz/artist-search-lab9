/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArtistById, getReleases } from '../../services/musicApi';

const ArtistDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [artist, setArtist] = useState({});
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    getArtistById(id)
      .then(artistObj => setArtist(artistObj))
      .then(() => getReleases(id))
      .then(releasesArr => setReleases(releasesArr))
      .then(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>{artist.name}</h1>
      <p>Country:{artist.country}</p>
      <p>Type: {artist.type}</p>
      <p>Active: {artist.begin} - {artist.end ?? 'current'}</p>
      <ul>
        {releases.map(release => (
          <li key={release.id}>
            <img src={release.image} alt={release.title + 'cover art'} width={'100'}/>
            <p>{release.title}</p>
            <p>{release.date}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArtistDetail;
