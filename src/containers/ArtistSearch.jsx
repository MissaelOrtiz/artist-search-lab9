import React, { useEffect, useState } from 'react';
import ArtistList from '../components/artists/ArtistList';
import Search from '../components/artists/Search';
import { getArtist } from '../services/musicApi';

const ArtistSearch = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getArtist(search)
      .then((artists) => setArtists(artists))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    if(search) getArtist(search)
      .then((res) => setArtists(res));
    if(!search) setArtists([]);
  }, [search]);

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  if(loading) return <h1>Loading...</h1>;
  if(search === '') return (
    <>
      <Search search={search} onSearch={handleSearch}/>
      <h1>No Artists Found</h1>
    </>
  );
  if(artists !== []) return (
    <>
      <Search search={search} onSearch={handleSearch}/>
      <ArtistList artists={artists} search={search} />
    </>
  );
};

export default ArtistSearch;
