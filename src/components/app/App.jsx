import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ArtistSearch from '../../containers/artistSearch';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/"> Home </Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <ArtistSearch />
        </Route>
      </Switch>
    </Router>
  );
}
