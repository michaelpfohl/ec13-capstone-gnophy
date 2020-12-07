import React, { Component } from 'react';

import sightingsData from '../helpers/data/sightingsData';

import AppModal from '../components/AppModal';
import SightingForm from '../components/Forms/SightingForm';

class SingleSighting extends Component {
  state = {
    sighting: {},
  };

  componentDidMount() {
    const sightingId = this.props.match.params.id;
    sightingsData.getSingleSighting(sightingId).then((response) => {
      this.setState({ sighting: response });
    });
  }

  getSightingInfo = () => {
    const sightingId = this.props.match.params.id;
    sightingsData.getSingleSighting(sightingId).then((response) => {
      this.setState({ sighting: response });
    });
  }

  render() {
    const { sighting } = this.state;
    return (
      <div className="d-flex ss-container">
        <img className="ss-image" src={sighting.imageUrl} alt={sighting.name} />
        <div className="ss-info-container">
          <h1 className="ss-name">{sighting.name}</h1>
          <div className="ss-subheader-container">
            <div className="ss-subheader">{sighting.location}</div>
            <div className="ss-subheader"> · </div>
            <div className="ss-subheader">{sighting.biome}</div>
            <div className="ss-subheader"> · </div>
            <div className="ss-subheader">{sighting.type}</div>
          </div>
          <p className="ss-notes">{sighting.notes}</p>
          <AppModal color="success" title={'Update Sighting'} buttonLabel={<i class="fas fa-edit"></i>}>
            <SightingForm sighting={sighting} onUpdate={this.getSightingInfo}/>
          </AppModal>
        </div>
      </div>
    );
  }
}

export default SingleSighting;
