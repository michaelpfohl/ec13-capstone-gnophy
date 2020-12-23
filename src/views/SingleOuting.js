import React, { Component } from 'react';

import outingsData from '../helpers/data/outingsData';
import userData from '../helpers/data/userData';
import sightingsData from '../helpers/data/sightingsData';

import AppModal from '../components/AppModal';
import OutingForm from '../components/Forms/OutingForm';
import SightingForm from '../components/Forms/SightingForm';
import SingleOutingHeader from '../components/SingleOuting/header';
import SightingList from '../components/SingleOuting/sighting';

class SingleOuting extends Component {
  state = {
    outing: {},
    sightings: [],
  };

  componentDidMount() {
    const outingId = this.props.match.params.id;
    const { user } = this.props;
    if (user !== null) {
      userData.getUser(user.uid).then((response) => {
        this.setState({ experience: response.experience });
      });
    }
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
    const { user } = this.props;
    if (user !== null) {
      userData.getUser(user.uid).then((response) => {
        this.setState({ experience: response.experience });
      });
    }
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
    const { sightings, outing } = this.state;
    e.preventDefault();
    const notRemovedSightings = sightings.filter((sighting) => sighting.firebaseKey !== e.target.id);
    this.setState({ sightings: notRemovedSightings });
    sightingsData
      .deleteSighting(e.target.id)
      .then(() => this.getOutingInfo(outing.firebaseKey));
  };

  removeOuting = (e) => {
    e.preventDefault();
    sightingsData.deleteOutingSightings(e.target.id);
    outingsData
      .deleteOuting(e.target.id)
      .then(() => this.props.history.goBack());
  };

  render() {
    const {
      outing, outingId, sightings,
    } = this.state;
    const { experience } = this.props;
    const showSightings = () => sightings.map((sighting) => (
        <SightingList
          key={sighting.firebaseKey}
          sighting={sighting}
          removeSighting={this.removeSighting}
        />
    ));
    return (
      <div>
        <SingleOutingHeader outing={outing} />
        <div className="d-flex justify-content-center">
          <div className="so-button-container d-flex justify-content-around">
            <AppModal
              color="success so-button"
              title={'Create Sighting'}
              buttonLabel={'Create Sighting'}
            >
              <SightingForm
                sightings={sightings}
                onUpdate={this.getOutingInfo}
                outingId={outingId}
                experience={experience}
                addExperience={this.props.addExperience}
              />
            </AppModal>
            <AppModal
              color="success so-button"
              title={'Update Outing'}
              buttonLabel={'Update Outing'}
            >
              <OutingForm outing={outing} onUpdate={this.getOutingInfo} />
            </AppModal>
            <AppModal
              color="danger so-button"
              className="delete-modal d-flex"
              title={'Delete Outing'}
              buttonLabel={'Delete Outing'}
            >
              <p className="delete-text">
                Are you sure you want to delete this outing and all of its
                sightings?
              </p>
              <button
                className="card-button btn-danger"
                id={outing.firebaseKey}
                onClick={(e) => this.removeOuting(e)}
              >
                Yes, Delete
              </button>
            </AppModal>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center so-sightings-container">
          {sightings.length ? (
            showSightings()
          ) : (
            <div className="no-sightings">
              <h1 className="no-sightings-header">No Sightings Yet!</h1>
              <p className="no-sightings-subheader">
                Click the button above to add one!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SingleOuting;
