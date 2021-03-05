import React, { Component } from 'react';

import authData from '../helpers/data/authData';
import sightingsData from '../helpers/data/sightingsData';

import SightingCard from '../components/Cards/SightingCard';
import SearchInput from '../components/SearchInput';
import Loader from '../components/Loader';

import deerIcon from '../assets/images/nounDeerIcon.png';
import branchIcon from '../assets/images/nounBranchIcon.png';
import mushroomIcon from '../assets/images/nounMushroomIcon.png';
import refreshIcon from '../assets/images/nounRefreshIcon.png';

class Sightings extends Component {
  state = {
    sightings: [],
    filteredSightings: [],
    loading: true,
  };

  componentDidMount() {
    this.getSightings();
  }

  getSightings = () => {
    const userId = authData.getUid();
    sightingsData.getUserSightings(userId).then((response) => {
      this.setState({ sightings: response, filteredSightings: response }, this.setLoading);
    });
  }

  removeSighting = (e) => {
    const { sightings } = this.state;
    e.preventDefault();
    const notRemovedSightings = sightings.filter((sighting) => sighting.firebaseKey !== e.target.id);
    this.setState({ sightings: notRemovedSightings });
    sightingsData.deleteSighting(e.target.id).then(() => this.getSightings());
  };

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  filterByType = (e) => {
    const type = e.target.id;
    const { sightings } = this.state;
    if (type === 'All') {
      this.setState({ filteredSightings: sightings });
    } else {
      const filteredSightings = sightings.filter((sighting) => sighting.type === type);
      this.setState({ filteredSightings });
    }
  }

  render() {
    const { filteredSightings, loading } = this.state;
    const showSightings = () => (
      filteredSightings.map((sighting) => <SightingCard key={sighting.firebaseKey}
        sighting={sighting}
        removeSighting={this.removeSighting} />)
    );
    return (
      <>
      { loading ? (
          <Loader />
      ) : (
      <div className="sightings--container">
        <SearchInput type="sighting"/>
        <div className="d-flex justify-content-center">
          <div className="filter-buttons d-flex justify-content-around">
            <button className="btn btn-success" id="Fauna" onClick={this.filterByType}><img className="filter-icon" alt="Deer by priyanka from the Noun Project" src={deerIcon}/></button>
            <button className="btn btn-success" id="Flora" onClick={this.filterByType}><img className="filter-icon" alt="Branch by tezar tantular from the Noun Project" src={branchIcon}/></button>
            <button className="btn btn-success" id="Fungi" onClick={this.filterByType}><img className="filter-icon" alt="Mushroom by tezar tantular from the Noun Project" src={mushroomIcon}/></button>
            <button className="btn btn-success" id="All" onClick={this.filterByType}><img className="filter-icon" alt="Refresh by Free Icons from the Noun Project" src={refreshIcon}/></button>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          { filteredSightings.length ? showSightings() : <div className="no-sightings"><h1 className="no-sightings-header">No Sightings Yet!</h1><p className="no-sightings-subheader">Create or go to an outing in order to add a sighting!</p></div>}
        </div>
      </div>
      )}
      </>
    );
  }
}

export default Sightings;
