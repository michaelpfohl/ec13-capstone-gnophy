import React, { Component } from 'react';

import getUser from '../helpers/data/authData';
import outingsData from '../helpers/data/outingsData';
import sightingsData from '../helpers/data/sightingsData';

import AppModal from '../components/AppModal';
import OutingForm from '../components/Forms/OutingForm';
import OutingCard from '../components/Cards/OutingCard';
import Loader from '../components/Loader';
import SearchInput from '../components/SearchInput';

class Outings extends Component {
  state = {
    outings: [],
    loading: true,
  };

  componentDidMount() {
    this.getOutings();
  }

  getOutings = () => {
    const currentUser = getUser.getUid();
    outingsData.getOutings(currentUser).then((res) => {
      this.setState({
        outings: res,
      }, this.setLoading);
    });
  };

  removeOuting = (e) => {
    e.preventDefault();
    const notRemovedOutings = this.state.outings.filter((outing) => outing.firebaseKey !== e.target.id);
    this.setState({
      outings: notRemovedOutings,
    });
    sightingsData.deleteOutingSightings(e.target.id);
    outingsData.deleteOuting(e.target.id);
  };

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    const { outings, loading } = this.state;
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
      <>
      { loading ? (
          <Loader />
      ) : (
      <div className="outings--container">
        <SearchInput type="outing"/>
        <AppModal color="success" title={'Create Outing'} buttonLabel={'Create Outing'}>
          <OutingForm onUpdate={this.getOutings}/>
        </AppModal>
        <div className="outings-container d-flex flex-wrap justify-content-center">
          {showOutings()}
        </div>
      </div>
      )}
      </>
    );
  }
}

export default Outings;
