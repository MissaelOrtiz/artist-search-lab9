import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/"> Home </Link>
        </nav>
      </header>
      <Switch>
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
