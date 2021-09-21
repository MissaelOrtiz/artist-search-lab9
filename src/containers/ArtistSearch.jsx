/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import ArtistList from '../components/artists/ArtistList';
import Search from '../components/artists/Search';
import { getArtist } from '../services/musicApi';

const ArtistSearch = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArtist(search, page)
      .then((artists) => setArtists(artists))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    if(search) {
      setPage(1);
      getArtist(search, page)
        .then((res) => setArtists(res));
    }
    if(!search) setArtists([]);
  }, [search]);

  useEffect(() => {
    setLoading(true);
    getArtist(search, page)
      .then((artists) => setArtists(artists))
      .then(() => setLoading(false));
  }, [page]);

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handlePage = (number) => {
    setPage(page + number);
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
      <ArtistList artists={artists} search={search} page={page} setPage={handlePage} />
    </>
  );
};

export default ArtistSearch;
