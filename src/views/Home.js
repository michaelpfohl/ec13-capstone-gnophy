import React, { Component } from 'react';

import Loader from '../components/Loader';
import HomeComponent from '../components/HomeComponent';
import Auth from '../components/Auth';

class Home extends Component {
  state = {};

  render() {
    const { user } = this.props;
    const loadComponent = () => {
      let component = '';
      if (user === null) {
        component = <Loader />;
      } else if (user) {
        component = <HomeComponent />;
      } else {
        component = <Auth />;
      }
      return component;
    };

    return (
      <div className="home--container">
        {loadComponent()}
      </div>
    );
  }
}

export default Home;
