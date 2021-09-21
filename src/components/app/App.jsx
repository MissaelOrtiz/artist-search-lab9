import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <button onClick={() => location.replace('/')}>Home</button>
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
