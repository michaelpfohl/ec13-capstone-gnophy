import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home';
import Profile from '../views/Profile';
import Outings from '../views/Outings';
import Sightings from '../views/Sightings';
import About from '../views/About';
import NotFound from '../views/NotFound';

export default function Routes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => <Home user={user}/>}
      />
      <Route
        exact
        path="/profile"
        component={Profile}
      />
      <Route
        exact
        path="/outings"
        component={Outings}
      />
      <Route
        exact
        path="/sightings"
        component={Sightings}
      />
      <Route
        exact
        path="/about"
        component={About}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
