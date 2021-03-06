/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import ArtistList from '../components/artists/ArtistList';
import Search from '../components/artists/Search';
import { getArtist } from '../services/musicApi';
import { useParams } from 'react-router-dom';

const ArtistSearch = () => {
  const { searchC } = useParams();
  let { pageC } = useParams();
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState(searchC ?? '');
  if(pageC) {
    pageC = +pageC;
  } else {
    pageC = 1;
  }
  const [page] = useState(pageC);

  useEffect(() => {
    getArtist(search, page)
      .then((artists) => setArtists(artists))
      .then(() => setLoading(false));
  }, []);

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    location.replace(`/${search}/${page}`);
  };

  const handlePage = (number) => {
    location.replace(`/${search}/${page + number}`);
  };

  if(loading && !searchC) return <h1>Loading...</h1>;
  if(search === '') return (
    <>
      <Search search={search} onSearch={handleSearch} onSubmit={handleSubmit}/>
      <h1>No Artists Found</h1>
    </>
  );
  if(artists !== []) return (
    <>
      <Search search={search} onSearch={handleSearch} onSubmit={handleSubmit}/>
      <ArtistList artists={artists} search={search} page={page} handlePage={handlePage} />
    </>
  );
};

export default ArtistSearch;
