import React, { Component } from 'react';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import AppModal from '../AppModal';

class SightingList extends Component {
  render() {
    const { sighting, removeSighting } = this.props;
    return (
      <div>
        <div className="sl-container">
          <div className="row">
            <div className="col-xl-3 col-lg-6">
              <img
                className="sl-image"
                src={sighting.imageUrl}
                alt={sighting.name}
              />
            </div>
            <div className="col-xl-5 col-lg-6 sl-center-container">
              <h1 className="sl-name">{sighting.name}</h1>
              <div className="d-flex justify-content-center sl-button-container">
                <Button className="btn modal-button btn-success">
                  <Link
                    to={`/sightings/${sighting.firebaseKey}`}
                    className="card-button-text"
                  >
                    <i class="fas fa-eye"></i>
                  </Link>
                </Button>
                <div className="spacer"></div>
                <AppModal
                  color="danger"
                  className="delete-modal d-flex"
                  title={'Delete Sighting'}
                  buttonLabel={<i class="fas fa-times-circle"></i>}
                >
                  <p className="delete-text">Are you sure you want to delete this sighting?</p>
                  <Button
                    className="card-button btn-danger"
                    id={sighting.firebaseKey}
                    onClick={(e) => removeSighting(e)}
                  >
                    Yes, Delete
                  </Button>
                </AppModal>
              </div>
            </div>
            <div className="sl-info-container col-4">
              <div className="sl-subheader-container">
                <div className="sl-subheader">
                  Location: {sighting.location}
                </div>
                <div className="sl-subheader">Biome: {sighting.biome}</div>
                <div className="sl-subheader">Type: {sighting.type}</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default SightingList;
