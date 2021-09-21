import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch';
import ArtistDetail from '../artists/ArtistDetail';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <button onClick={() => location.replace('/')}>Home</button>
        </nav>
      </header>
      <Switch>
        <Route exact path="/artists/:id">
          <ArtistDetail />
        </Route>
        <Route path="/:searchC/:pageC">
          <ArtistSearch />
        </Route>
        <Route path="/">
          <ArtistSearch />
        </Route>
      </Switch>
    </Router>
  );
}
