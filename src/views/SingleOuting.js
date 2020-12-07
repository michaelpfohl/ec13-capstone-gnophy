import React, { Component } from 'react';

import outingsData from '../helpers/data/outingsData';

import AppModal from '../components/AppModal';
import OutingForm from '../components/Forms/OutingForm';
import SightingForm from '../components/Forms/SightingForm';
import SingleOutingHeader from '../components/SingleOutingHeader';
import SightingCard from '../components/Cards/SightingCard';
import sightingsData from '../helpers/data/sightingsData';

class SingleOuting extends Component {
  state = {
    outing: {},
    sightings: [],
  };

  componentDidMount() {
    const outingId = this.props.match.params.id;
    this.setState({ outingId });
    outingsData.getSingleOuting(outingId).then((outingResponse) => {
      sightingsData.getOutingSightings(outingId).then((sightingResponse) => {
        this.setState({
          outing: outingResponse,
          sightings: sightingResponse,
        });
      });
    });
  }

  getOutingInfo = (outingId) => {
    outingsData.getSingleOuting(outingId).then((outingResponse) => {
      sightingsData.getOutingSightings(outingId).then((sightingResponse) => {
        this.setState({
          outing: outingResponse,
          sightings: sightingResponse,
        });
      });
    });
  };

  removeSighting = (e) => {
    console.warn(e.target.id);
  }

  render() {
    const { outing, outingId, sightings } = this.state;
    const showSightings = () => (
      sightings.map((sighting) => <SightingCard key={sighting.firebaseKey}
        sighting={sighting}
        removeSighting={this.removeSighting} />)
    );
    return (
      <div className="fade">
        <SingleOutingHeader outing={outing} />
        <div className="d-flex justify-content-around">
          <AppModal title={'Create Sighting'} buttonLabel={'Create Sighting'}>
            <SightingForm sightings={sightings} onUpdate={this.getOutingInfo} outingId={outingId}/>
          </AppModal>
          <AppModal title={'Update Outing'} buttonLabel={'Update Outing'}>
              <OutingForm outing={outing} onUpdate={this.getOutingInfo} />
          </AppModal>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          { sightings.length ? showSightings() : <div className="no-sightings"><h1 className="no-sightings-header">No Sightings Yet!</h1><p className="no-sightings-subheader">Click the button above to add one!</p></div>}
        </div>
      </div>
    );
  }
}

export default SingleOuting;
