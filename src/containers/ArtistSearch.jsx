import React, { useEffect, useState } from 'react';
import ArtistList from '../components/artists/ArtistList';
import { getArtist } from '../services/musicApi';

const ArtistSearch = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('deathcab');

  useEffect(() => {
    getArtist(search)
      .then((artists) => setArtists(artists))
      .then(() => setLoading(false));
  }, []);

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      {/* <Search search={search} onSearch={handleSearch}/> */}
      <ArtistList artists={artists} search={search} />
    </>
  );
};

export default ArtistSearch;
