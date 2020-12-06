import React, { Component } from 'react';

import getUser from '../helpers/data/authData';
import outingsData from '../helpers/data/outingsData';

import AppModal from '../components/AppModal';
import OutingForm from '../components/Forms/OutingForm';
import OutingCard from '../components/Cards/OutingCard';

class Outings extends Component {
  state = {
    outings: [],
  };

  componentDidMount() {
    this.getOutings();
  }

  getOutings = () => {
    const currentUser = getUser.getUid();
    outingsData.getOutings(currentUser).then((res) => {
      this.setState({
        outings: res,
      });
    });
  };

  removeOuting = (e) => {
    e.preventDefault();
    const notRemovedOutings = this.state.outings.filter((outing) => outing.firebaseKey !== e.target.id);
    this.setState({
      outings: notRemovedOutings,
    });
    outingsData.deleteOuting(e.target.id);
  };

  render() {
    const { outings } = this.state;
    const showOutings = () => (
      outings.map((outing) => (
        <OutingCard
          key={outing.firebaseKey}
          outing={outing}
          removeOuting={this.removeOuting}
        />
      ))
    );
    return (
      <div className="outings--container">
        <AppModal title={'Create Outing'} buttonLabel={'Create Outing'}>
          <OutingForm />
        </AppModal>
        <div className="outings-container d-flex flex-wrap justify-content-center">
          {showOutings()}
        </div>
      </div>
    );
  }
}

export default Outings;
