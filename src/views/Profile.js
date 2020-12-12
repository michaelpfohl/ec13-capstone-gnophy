import React, { Component } from 'react';
import sightingsData from '../helpers/data/sightingsData';
import outingsData from '../helpers/data/outingsData';
import achievementsData from '../helpers/data/achievementsData';

import Achievement from '../components/Achievement';

class Profile extends Component {
  state = {
    outings: 0,
    sightings: 0,
    fauna: 0,
    flora: 0,
    fungi: 0,
  };

  componentDidMount() {
    const { user } = this.props;
    if (user) {
      outingsData.getOutings(user.uid).then((response) => {
        this.setState({ outings: response.length });
      });
      sightingsData.getUserSightings(user.uid).then((response) => {
        this.setState({ sightings: response.length });
      });
      sightingsData.numberOfSightings('Fauna').then((response) => {
        this.setState({ fauna: response });
      });
      sightingsData.numberOfSightings('Flora').then((response) => {
        this.setState({ flora: response });
      });
      sightingsData.numberOfSightings('Fungi').then((response) => {
        this.setState({ fungi: response });
      });
    }
  }

  render() {
    const { user, experience } = this.props;
    const {
      outings, sightings, flora, fauna, fungi,
    } = this.state;
    const achievements = achievementsData.getAchievements();
    const level = Math.floor(experience / 100);

    const showAchievements = (achievementType, stateType) => {
      const returnedAchievements = [];
      achievements.forEach((achievement) => {
        const {
          image, name, type, threshold,
        } = achievement;
        if (type === achievementType) {
          if (stateType >= threshold) {
            returnedAchievements.push(<Achievement image={image} name={name} display={true}/>);
          } else {
            returnedAchievements.push(<Achievement image={image} name={name} display={false}/>);
          }
        }
      });
      return returnedAchievements;
    };

    return (
      <div className="d-flex justify-content-center">
        <div className="profile-container">
          <div className="d-flex">
            <div className="d-flex justify-content-center">
              {user && (
                <>
                  <img
                    className="profile-image"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                  <div className="user-container d-flex justify-content-center">
                    <div>
                      <h1 className="profile-header">
                        {user.displayName} · Level: {level}
                      </h1>
                      <div className="d-flex justify-content-center">
                        <div className="stat-container">
                          <h1>Experience: {experience}</h1>
                          <h1>Outings: {outings}</h1>
                          <h1>Sightings: {sightings}</h1>
                        </div>
                        <div className="stat-container">
                          <h1>Fauna: {fauna}</h1>
                          <h1>Flora: {flora}</h1>
                          <h1>Fungi: {fungi}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="achievements-container">
            <h1 className="achievements-header">Achievements:</h1>
            <hr/>
            <div className="d-flex justify-content-center flex-wrap">
              {showAchievements('outing', outings)}
              {showAchievements('sighting', sightings)}
              {showAchievements('fauna', fauna)}
              {showAchievements('flora', flora)}
              {showAchievements('fungi', fungi)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
