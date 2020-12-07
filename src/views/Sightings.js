import React, { Component } from 'react';

import getUser from '../helpers/data/authData';
import sightingsData from '../helpers/data/sightingsData';

import SightingCard from '../components/Cards/SightingCard';
import Loader from '../components/Loader';

class Sightings extends Component {
  state = {
    sightings: [],
    loading: true,
  };

  componentDidMount() {
    this.getSightings();
  }

  getSightings = () => {
    const userId = getUser.getUid();
    sightingsData.getUserSightings(userId).then((response) => {
      this.setState({ sightings: response }, this.setLoading);
    });
  }

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    const { sightings, loading } = this.state;
    const showSightings = () => (
      sightings.map((sighting) => <SightingCard key={sighting.firebaseKey}
        sighting={sighting}
        removeSighting={this.removeSighting} />)
    );
    return (
      <>
      { loading ? (
          <Loader />
      ) : (
      <div className="sightings--container">
        <h1 className="sightings--header">All Your Sightings</h1>
        <div className="d-flex flex-wrap justify-content-center">
          { sightings.length ? showSightings() : <div className="no-sightings"><h1 className="no-sightings-header">No Sightings Yet!</h1><p className="no-sightings-subheader">Create or go to an outing in order to add a sighting!</p></div>}
        </div>
      </div>
      )}
      </>
    );
  }
}

export default Sightings;
