/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArtistById, getReleases } from '../../services/musicApi';
import ReleaseDetail from './ReleaseDetail';

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

  const onError = ({ target }) => {
    target.src = 'https://community.mp3tag.de/uploads/default/original/2X/a/acf3edeb055e7b77114f9e393d1edeeda37e50c9.png';
  };

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
            <ReleaseDetail release={release} onError={onError} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArtistDetail;
