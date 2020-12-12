import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home';
import Profile from '../views/Profile';
import Outings from '../views/Outings';
import SingleOuting from '../views/SingleOuting';
import Sightings from '../views/Sightings';
import SingleSighting from '../views/SingleSighting';
import About from '../views/About';
import SearchResults from '../views/SearchResults';
import NotFound from '../views/NotFound';

export default function Routes({ user, experience, addExperience }) {
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
        component={() => <Profile user={user} experience={experience}/>}
      />
      <Route
        exact
        path="/outings"
        component={() => <Outings user={user}/>}
      />
      <Route
        exact
        path="/outings/:id"
        component={(props) => <SingleOuting user={user} experience={experience} addExperience={addExperience} {...props}/>}
      />
      <Route
        exact
        path="/sightings"
        component={() => <Sightings user={user}/>}
      />
      <Route
        exact
        path="/sightings/:id"
        component={(props) => <SingleSighting user={user} {...props}/>}
      />
      <Route
        exact
        path="/about"
        component={About}
      />
      <Route
        exact
        path="/search/:term/:type"
        component={(props) => <SearchResults {...props} />}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
