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
  };

  removeSighting = (e) => {
    e.preventDefault();
    sightingsData.deleteSighting(e.target.id).then(() => this.props.history.goBack());
  };

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
          <div className="d-flex justify-content-around">
            <AppModal
              color="success"
              title={'Update Sighting'}
              buttonLabel={<i class="fas fa-edit"></i>}
            >
              <SightingForm
                sighting={sighting}
                onUpdate={this.getSightingInfo}
              />
            </AppModal>
            <AppModal
              color="danger"
              className="delete-modal d-flex"
              title={'Delete Outing'}
              buttonLabel={<i class="fas fa-times-circle"></i>}
            >
              <p>Are you sure you want to delete this sighting?</p>
              <button
                className="card-button card-button-danger"
                id={sighting.firebaseKey}
                onClick={(e) => this.removeSighting(e)}
              >
                Yes, Delete
              </button>
            </AppModal>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleSighting;
